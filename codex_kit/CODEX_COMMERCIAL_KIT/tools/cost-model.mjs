import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
export function computeCosts(c) {
  if (!(c.usdVndPlanningRate>0) || !(c.productiveHoursPerWeek>0) || c.hourValueVnd<0) throw new Error('INVALID_COST_INPUT');
  for(const rate of [c.qaDocsRate,c.unitEconomicsExample.refundRate,c.unitEconomicsExample.paymentFeeRate])
    if(!Number.isFinite(rate)||rate<0||rate>1) throw new Error('INVALID_COST_RATE');
  for(const phase of c.deliveryPhases)
    if(!Number.isFinite(phase.lowHours)||!Number.isFinite(phase.highHours)||phase.lowHours<0||phase.highHours<phase.lowHours) throw new Error('INVALID_EFFORT_RANGE');
  const sum=k=>c.deliveryPhases.reduce((a,p)=>a+p[k],0);
  const delivery={lowHours:sum('lowHours')*(1+c.qaDocsRate),highHours:sum('highHours')*(1+c.qaDocsRate)};
  delivery.lowLaborVnd=delivery.lowHours*c.hourValueVnd;
  delivery.highLaborVnd=delivery.highHours*c.hourValueVnd;
  delivery.lowWeeks=delivery.lowHours/c.productiveHoursPerWeek;
  delivery.highWeeks=delivery.highHours/c.productiveHoursPerWeek;
  const seller=c.sellerMonthlyScenarios.map(s=>{
    const incrementalUsd=s.newSubscriptionUsd+s.extraUsageBudgetUsd+s.storeHostingAllowanceUsd+s.backupAllowanceUsd+s.annualDomainAllowanceUsd/12+s.sellerPaidAppsheetUsers*s.appsheetUserUsd;
    return {name:s.name,incrementalUsd,incrementalVnd:Math.round(incrementalUsd*c.usdVndPlanningRate),
      totalIncludingExistingVnd:Math.round((incrementalUsd+s.existingPlusUsd)*c.usdVndPlanningRate)};
  });
  const customerCore=c.customerCorePaidUserScenarios.map(n=>({paidUsers:n,usd:n*c.officialListUsd.appsheetCoreUserMonthly,vnd:n*c.officialListUsd.appsheetCoreUserMonthly*c.usdVndPlanningRate}));
  const x=c.unitEconomicsExample;
  const contribution=x.salePriceVnd*(1-x.refundRate)-x.salePriceVnd*x.paymentFeeRate-x.supportHoursPerOrder*c.hourValueVnd-x.deliveryCostPerOrderVnd;
  const fixed=seller[x.monthlyScenarioIndex].incrementalVnd;
  const economics={contributionVnd:Math.round(contribution),monthlyFixedVnd:fixed,
    ordersToCoverMonthlyFixed:contribution>0?Math.ceil(fixed/contribution):null,
    ordersToRecoverDevelopmentAndPeriod:contribution>0?Math.ceil((x.developmentCostVnd+fixed*x.recoveryMonths)/contribution):null};
  const portfolio={lowHours:c.portfolioGroups.reduce((s,g)=>s+g.count*g.lowHoursEach,0)*(1+c.qaDocsRate),
    highHours:c.portfolioGroups.reduce((s,g)=>s+g.count*g.highHoursEach,0)*(1+c.qaDocsRate)};
  portfolio.lowLaborVnd=portfolio.lowHours*c.hourValueVnd;portfolio.highLaborVnd=portfolio.highHours*c.hourValueVnd;
  return {asOf:c.asOf,assumptionsOnly:true,delivery,seller,customerCore,economics,portfolio};
}
if (process.argv[1] && path.resolve(process.argv[1])===fileURLToPath(import.meta.url)) {
 const file=process.argv[2]?path.resolve(process.argv[2]):path.join(root,'config/costs.json');
 const result=computeCosts(JSON.parse(fs.readFileSync(file,'utf8')));
 console.log(JSON.stringify(result,null,2));
}
