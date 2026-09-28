### HƯỚNG DẪN TOÀN DIỆN VỀ KIẾN TRÚC DỰ ÁN AI-NATIVE VÀ KỸ THUẬT PROMPT ENGINEERING CHUYÊN SÂU

---

#### TỔNG QUAN TÀI LIỆU
Tài liệu này tổng hợp toàn bộ tri thức, phương pháp luận và chuẩn mực thực thi tốt nhất (best practices) từ 23 nguồn tài liệu kỹ thuật hàng đầu về kiến trúc phần mềm tích hợp AI (AI-Native Project Architecture). Tài liệu này bao quát quy trình thiết lập dự án mã nguồn AI-Native cho Claude Code, Cursor AI, OpenAI GPT-4.1/o1/o3/o4-mini, Google Gemini 3/Thinking Mode, cũng như thiết kế hệ thống AI Agent, Skills, Subagents, MCP và Hooks.

---

#### PHẦN 1: KIẾN TRÚC DỰ ÁN AI-NATIVE (AI-NATIVE PROJECT ARCHITECTURE)

##### 1.1. Hạ Tầng Kỹ Thuật AI (AI Engineering Layer)
Một dự án phát triển phần mềm AI-Native hiện đại vượt xa cơ chế tự động hoàn thành mã nguồn (autocomplete) thông thường. AI Agent có khả năng hiểu toàn bộ kho lưu trữ mã nguồn (repository), chỉnh sửa nhiều tệp cùng lúc, thực thi câu lệnh terminal, chạy kiểm thử, ủy quyền công việc cho subagent chuyên biệt và tự sửa lỗi lặp (iterative debugging).

Tuy nhiên, tính tin cậy của AI Agent phụ thuộc trực tiếp vào **ngữ cảnh kỹ thuật (engineering context)** và **các ranh giới bảo vệ (guardrails)** được thiết lập. Hạ tầng kỹ thuật AI được phân tầng thành các hợp phần cốt lõi sau:
1. **Instructions (Chỉ dẫn chung)**: Định nghĩa dự án là gì, vai trò tổng quan và các quy tắc toàn cục.
2. **Rules (Quy tắc kỹ thuật)**: Hướng dẫn chi tiết cách viết từng loại mã nguồn cụ thể (Backend, Frontend, Security, Testing).
3. **Skills (Kỹ năng có thể tái sử dụng)**: Đóng gói các quy trình công việc lặp đi lặp lại có tính chuẩn hóa cao.
4. **Subagents (Agent chuyên biệt)**: Chuyên môn hóa nhiệm vụ cho các đại lý độc lập với cửa sổ ngữ cảnh riêng biệt.
5. **MCP (Model Context Protocol)**: Cung cấp khả năng kết nối và truy cập các hệ thống bên ngoài (GitHub, Jira, Database, Sentry).
6. **Hooks (Vòng lặp kiểm soát tự động)**: Tự động xác thực hoặc chặn các hành vi nguy hiểm bất chấp quyết định của mô hình.
7. **Code + Tests + Validation**: Mã nguồn thực tế, các bộ kiểm thử và kiểm tra định dạng.

**Nguyên lý vàng**: *Instructions bảo mô hình phải làm gì. Rules bảo mô hình làm như thế nào. Skills dạy mô hình quy trình tái sử dụng. Subagents chuyên môn hóa công việc. Hooks bắt buộc tuân thủ ranh giới an toàn. MCP mở rộng công cụ bên ngoài.*

---

##### 1.2. So Sánh Kiến Trúc Cấu Hình: Claude Code vs. Cursor AI
Mặc dù giải quyết cùng bài toán tích hợp AI vào quy trình lập trình, Claude Code và Cursor AI có các cơ chế cấu hình khác nhau:

| Thành Phần Cấu Hình | Claude Code | Cursor AI |
| ------ | ------ | ------ |
| **Chỉ dẫn dự án chính** | CLAUDE.md / .claude/CLAUDE.md | AGENTS.md / Project Rules |
| **Quy tắc theo phạm vi (Rules)** | .claude/rules/*.md | .cursor/rules/*.mdc |
| **Chỉ dẫn cá nhân cục bộ** | CLAUDE.local.md (gitignored) | User Rules |
| **Thư mục Skills** | .claude/skills/ | .cursor/skills/ (Hỗ trợ đọc .claude/skills/) |
| **Thư mục Subagents** | .claude/agents/ | .cursor/agents/ |
| **Lệnh tùy chỉnh (Commands)** | .claude/commands/ | Commands / Skills |
| **Vòng lặp kiểm soát (Hooks)** | .claude/settings.json | .cursor/hooks.json |
| **Tích hợp công cụ MCP** | .mcp.json / settings.json | .cursor/mcp.json |

---

##### 1.3. Kiến Trúc Cross-Platform Chia Sẻ Giữa Các Công Cụ
Để tránh việc trùng lặp cấu hình và xung đột quy tắc khi nhóm phát triển sử dụng đồng thời nhiều công cụ AI khác nhau, hệ thống nên được chia thành 3 phần:
1. **Tri thức kỹ thuật dùng chung (Shared Engineering Knowledge)**: AGENTS.md, docs/, .cursor/rules/.
2. **Cấu hình riêng cho Claude Code**: CLAUDE.md, .claude/.
3. **Cấu hình riêng cho Cursor AI**: .cursor/.

###### Cấu Trúc Thư Mục Chuẩn Cho Dự Án Production AI-Native:
```text
my-project/
├── AGENTS.md                   # Hợp đồng kỹ thuật cấp cao (dùng chung)
├── CLAUDE.md                   # Chỉ dẫn khởi đầu cho Claude Code (import @AGENTS.md)
├── apps/
│   ├── api/                    # NestJS / Backend service
│   └── web/                    # React / Frontend web
├── packages/
│   ├── shared/                 # TypeScript types dùng chung
│   └── config/                 # Cấu hình hệ thống chung
├── docs/                       # Tài liệu kiến trúc & quyết định kỹ thuật
│   ├── architecture/
│   ├── api/
│   └── decisions/
├── tests/                      # Bộ kiểm thử tích hợp
├── .claude/
│   ├── rules/                  # Quy tắc theo phạm vi tệp (architecture, backend, frontend, security)
│   ├── skills/                 # Các quy trình kỹ năng tái sử dụng (security-audit, code-review, deployment)
│   ├── agents/                 # Các subagent chuyên biệt (security-auditor, code-reviewer)
│   └── settings.json           # Cấu hình hooks và thiết lập hệ thống
├── .cursor/
│   ├── rules/                  # Tệp .mdc quy định quy tắc Cursor
│   ├── skills/                 # Skills tương thích
│   ├── agents/                 # Subagents cấu hình Cursor
│   ├── hooks.json              # Lifecycle hooks của Cursor
│   └── mcp.json                # Khai báo công cụ MCP
└── hooks/                      # Kịch bản Shell kiểm tra tự động (gitleaks, lint, format)
```

---

### 1.4. Quản Lý Ngữ Cảnh Tiệm Tiến (Progressive Context Management)
Một trong những sai lầm lớn nhất trong các dự án AI coding là tạo ra một tệp `CLAUDE.md` hoặc `AGENTS.md` phình to tới hàng ngàn dòng. Điều này gây lãng phí dung lượng cửa sổ ngữ cảnh (context window) và làm giảm khả năng tuân thủ chỉ dẫn của mô hình.

**Chiến lược Ngữ Cảnh Tiệm Tiến (Progressive Disclosure)**:
- **AGENTS.md / CLAUDE.md**: Giữ ngắn gọn (~100–200 dòng), đóng vai trò như một Bản Bản đồ Định hướng (Table of Contents) trỏ tới các tài liệu chi tiết trong `docs/`.
- **Rules theo đường dẫn (Path-specific rules)**: Chỉ kích hoạt quy tắc khi AI chạm vào các tệp thuộc đường dẫn phù hợp (ví dụ: `apps/api/**/*.ts` nạp quy tắc backend, `apps/web/**/*.tsx` nạp quy tắc frontend).
- **Skills**: Chỉ đọc YAML frontmatter ban đầu; nội dung chi tiết của `SKILL.md` chỉ được nạp vào ngữ cảnh khi mô hình xác định nhiệm vụ cần sử dụng skill đó.

---

### 1.5. Những Nội Dung KHÔNG ĐƯỢC Đưa Vào AI Instructions
Tránh đưa các loại thông tin sau vào tệp `CLAUDE.md` hoặc `AGENTS.md`:
1. **Tài liệu tham khảo quá lớn**: API doc đầy đủ, database schema toàn bộ -> Lưu trong `docs/` để mô hình tự tra cứu khi cần.
2. **Thông tin tạm thời**: "Đang sửa lỗi ticket #123" -> Đưa vào issue tracker, commit message hoặc PR.
3. **Bí mật & Credentials**: `API_KEY`, mật khẩu DB -> Luôn tham chiếu qua biến môi trường.
4. **Thủ tục chi tiết nhiều bước**: -> Đưa vào `skills/`.
5. **Quy tắc cấm chỉ bằng lời văn**: Không phụ thuộc hoàn toàn vào lời dặn "Không được làm X" -> Sử dụng Hooks, CI/CD và quyền hệ thống để chặn cứng.

---

## PHẦN 2: KỸ THUẬT PROMPT ENGINEERING TOÀN DIỆN THEO DÒNG MÔ HÌNH (2026)

### 2.1. Sự Phân Hóa Kiến Trúc Giữa Các Dòng Mô Hình

| Tiêu Chí | Nhóm Mô Hình Thực Thi (Execution Models) | Nhóm Mô Hình Suy Luận (Reasoning Models) |
| :--- | :--- | :--- |
| **Đại diện tiêu biểu** | GPT-4o, GPT-4.1, Claude 3.5 Sonnet / Sonnet 5, Gemini 3 Flash | OpenAI o1, o3-mini, Gemini Pro/Flash (Thinking Mode), Claude (Adaptive Thinking) |
| **Nguyên lý thiết kế** | Cung cấp quy trình từng bước, chi tiết, đóng gói thẻ XML, ràng buộc cấu trúc rõ ràng. | **"Less is More"**: Chỉ dẫn trực tiếp, ngắn gọn, thiết lập mục tiêu và ranh giới rõ ràng. |
| **Cơ chế Chain-of-Thought (CoT)** | Cần khuyến khích mô hình "Think step by step" hoặc viết quy trình suy luận trước khi trả lời. | **KHÔNG yêu cầu "Think step by step"**: Mô hình tự thực hiện suy luận ẩn nội bộ. Việc ép CoT có thể làm giảm hiệu năng và tốn token. |
| **Sử dụng Ví dụ (Few-Shot)** | Rất hiệu quả khi cung cấp 2-3 ví dụ mẫu để định hình định dạng. | Ưu tiên Zero-Shot trước. Chỉ thêm vài ví dụ khi định dạng đầu ra quá phức tạp và phải đảm bảo ví dụ khớp tuyệt đối với chỉ dẫn. |

---

### 2.2. Khung Prompt Chuẩn Cho Claude (Anthropic 10-Part Framework & XML Tags)
Anthropic đề xuất khung Prompt 10 thành phần dùng cho các tác vụ phức tạp:
1. **Task Context**: Vai trò và công việc Claude đang thực hiện.
2. **Tone Context**: Phong cách và thái độ giao tiếp.
3. **Background Data**: Dữ liệu tham chiếu, quy chuẩn, tài liệu nền.
4. **Detailed Task Description & Rules**: Mô tả nhiệm vụ chi tiết kèm các quy tắc cứng.
5. **Immediate Task**: Yêu cầu cụ thể cần giải quyết ngay lập tức.
6. **Negative Constraints**: Các ranh giới cấm không được vi phạm.
7. **Examples (Few-Shot)**: Các ví dụ minh họa đầu ra mong muốn.
8. **Thinking Step**: Khuyến khích phân tích suy luận trước khi kết luận.
9. **Output Formatting**: Quy định cấu trúc định dạng câu trả lời.
10. **Prefilled Response**: Viết sẵn từ đầu tiên của câu trả lời (ví dụ: gõ sẵn `{` để ép định dạng JSON).

*Đối với tác vụ hàng ngày, 4 thành phần tối thiểu bắt buộc gồm*: **Task Context**, **Detailed Task Description & Rules**, **Immediate Task**, và **Output Formatting**.

#### Tối Ưu Hóa Bằng Thẻ XML
Claude được huấn luyện đặc biệt để phân tích các thẻ dạng XML (`<instructions>`, `<context>`, `<constraints>`, `<documents>`, `<code_template>`). Thẻ XML giúp phân tách minh bạch giữa ngữ cảnh kinh doanh, dữ liệu đầu vào và câu lệnh thực thi, ngăn ngừa hiện tượng trộn lẫn thông tin hoặc ngộ nhận câu lệnh.

---

### 2.3. Khung Prompt Chuẩn Cho Gemini (PTCF Framework & Search Grounding)
Google khuyến nghị khung cấu trúc **PTCF** cho các mô hình Gemini:
- **P - Persona**: Thiết lập vai trò chuyên gia cho Gemini (ngăn ngôn từ trợ lý chung chung).
- **T - Task**: Sử dụng động từ hành động cụ thể (Analyze, Debug, Write, Compare).
- **C - Context**: Bối cảnh nhiệm vụ, đối tượng mục tiêu và lý do thực hiện.
- **F - Format**: Quy định định dạng đầu ra (Table, Bullet points, JSON, Python code block).

#### Tính Năng Mới Của Gemini 3 & Multi-Turn Interactions:
1. **Trực tiếp & Ngắn gọn**: Gemini 3 hoạt động tối ưu nhất với câu lệnh ngắn gọn (15–30 từ có bối cảnh rõ ràng) hơn là các prompt dài dòng phình to.
2. **Google Search Grounding**: Kết nối dữ liệu thời gian thực để chống hallucination cho các sự kiện mới.
3. **Interactions API**: Sử dụng `previous_interaction_id` hoặc truyền mảng lịch sử `steps` đầy đủ (bao gồm cả thought steps) để duy trì hội thoại đa lượt chính xác.

---

### 2.4. Khung Prompt Chuẩn Cho OpenAI (GPT-4.1 & Responses API)
OpenAI GPT-4.1 là mô hình thực thi có khả năng tuân thủ chỉ dẫn cực kỳ nghiêm ngặt. Các quy tắc tối ưu cho GPT-4.1 bao gồm:
1. **Developer Messages**: Sử dụng vai trò `developer` thay cho `system` để thiết lập quyền ưu tiên cao nhất theo Chain of Command.
2. **Thiết Lập Đặt Vị Trí Chỉ Dẫn**: Đối với ngữ cảnh dài, đặt chỉ dẫn quan trọng ở **cả đầu và cuối** prompt.
3. **Agentic Planning Prompting**: Ép GPT-4.1 lập kế hoạch và phản hồi giữa các lượt gọi tool (`"You MUST plan extensively before each function call..."`), giúp tăng điểm đánh giá tác vụ lập trình (SWE-bench) lên 20%.
4. **Structured Outputs**: Sử dụng tham số JSON Schema nghiêm ngặt (`strict: true`) để đảm bảo đầu ra chuẩn định dạng dữ liệu hệ thống.

---

## PHẦN 3: XÂY DỰNG SKILLS, SUBAGENTS, MCP & HOOKS CHUYÊN SÂU

### 3.1. Cấu Trúc Kỹ Năng (Skills Framework)
Skill là một thư mục đóng gói các chỉ dẫn và tài nguyên giúp AI xử lý các quy trình công việc lặp đi lặp lại.

#### Cấu Trúc File Chuẩn Của Một Skill:
```text
.claude/skills/security-audit/
├── SKILL.md              # File chỉ dẫn chính (Bắt buộc)
├── scripts/              # Kịch bản hỗ trợ thực thi tự động (Python, Shell)
└── references/           # Tài liệu tra cứu chi tiết (Checklists, Policies)
```

#### Quy Tắc YAML Frontmatter Trong `SKILL.md`:
```yaml
---
name: security-audit
description: Kiểm tra lỗ hổng bảo mật ứng dụng. Kích hoạt khi người dùng yêu cầu "audit security", "check vulnerabilities", hoặc khi review PR trước khi deploy.
allowed-tools: "Bash(python:*) Read Write"
metadata:
  author: DevSecOps Team
  version: 1.0.0
---
```

*Lưu ý quan trọng về Frontmatter*:
- `name`: Định dạng `kebab-case`, không chứa khoảng trắng hay chữ viết hoa.
- `description`: **Bắt buộc** chứa cả 2 phần: **Mô hình làm gì** và **Khi nào cần kích hoạt (Trigger phrases)**. Không chứa thẻ XML (`<` hoặc `>`).

---

### 3.2. Cấu Hình Subagents Chuyên Biệt
Subagent giúp cô lập ngữ cảnh và giới hạn công cụ cho các tác vụ chuyên biệt.

#### Ví Dụ Cấu Hình Subagent Bảo Mật (`.claude/agents/security-auditor.md`):
```yaml
---
name: security-auditor
description: Chuyên gia kiểm tra bảo mật độc lập. Sử dụng khi cần đánh giá an toàn mã nguồn trước khi release.
tools: Read, Grep, Bash
model: sonnet
effort: high
maxTurns: 10
---

Bạn là một Chuyên gia Bảo mật Ứng dụng Senior.
Hãy phân tích các thay đổi mã nguồn và ưu tiên kiểm tra:
1. Hardcoded secrets & credentials
2. Authentication & Authorization bypass
3. SQL Injection, XSS, CSRF, SSRF
4. Dependency vulnerabilities

Chỉ báo cáo các lỗ hổng có bằng chứng thực tế. Cung cấp báo cáo theo định dạng: Severity, File, Location, Attack Scenario, Recommended Fix.
```

---

### 3.3. Vòng Lặp Kiểm Soát Tự Động (Hooks System)
Hooks là lớp thực thi cưỡng chế cứng bằng kịch bản shell, hoạt động hoàn toàn độc lập với suy luận của AI.

#### Các Loại Lifecycle Hooks Chính:
- `PreToolUse`: Chạy trước khi AI thực thi công cụ (chặn lệnh nguy hiểm như `rm -rf`, leak secret, hoặc truy cập file `.env`).
- `PostToolUse`: Chạy sau khi AI chỉnh sửa file (tự động chạy `prettier`, `eslint`, hoặc `unittest`).
- `UserPromptSubmit`: Làm sạch và bổ sung ngữ cảnh vào prompt của người dùng trước khi gửi tới mô hình.
- `Stop`: Kiểm tra điều kiện hoàn thành công việc trước khi kết thúc session.

#### Ví Dụ Cấu Hình Hooks (`.claude/settings.json`):
```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "if [[ "$CLAUDE_TOOL_INPUT" == *"rm -rf"* || "$CLAUDE_TOOL_INPUT" == *"push --force"* ]]; then echo 'BLOCKED: Dangerous operation detected' && exit 2; fi"
          }
        ]
      }
    ],
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          {
            "type": "command",
            "command": "if [[ "$CLAUDE_FILE_PATHS" =~ \.(ts|tsx)$ ]]; then npx prettier --write "$CLAUDE_FILE_PATHS" 2>/dev/null || true; fi"
          }
        ]
      }
    ]
  }
}
```

---

### 3.4. Giao Thức Kết Nối Công Cụ MCP (Model Context Protocol)
MCP kết nối AI Agent với các hệ thống doanh nghiệp theo nguyên tắc quyền tối thiểu (Least Privilege).

#### Khai Báo MCP Server Cấp Dự Án (`.mcp.json`):
```json
{
  "mcpServers": {
    "github": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "${GITHUB_TOKEN}"
      }
    },
    "postgres": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-postgres", "postgresql://localhost/mydb"]
    }
  }
}
```

---

## PHẦN 4: LỘ TRÌNH TRIỂN KHAI VÀ QUY TRÌNH THỰC THI CHUẨN (WORKFLOW)

### 4.1. Quy Trình Thực Thực Thi Tính Năng (Feature Workflow)
1. **Khám phá ngữ cảnh (Explore)**: Tìm kiếm các tệp mã nguồn liên quan và đọc quy tắc tương ứng.
2. **Lập kế hoạch (Plan)**: Tạo file kế hoạch công việc trong `scratch/` hoặc trình bày danh sách các bước.
3. **Thực thi tiệm tiến (Implement)**: Chỉnh sửa từng khối mã nguồn nhỏ, không thực hiện thay đổi kiến trúc quá rộng khi chưa được phép.
4. **Kiểm tra độc lập (Verify)**: Chạy unit tests, linter, typecheck.
5. **Review Diff & Báo cáo**: Đánh giá sự thay đổi và báo cáo rủi ro còn lại.

### 4.2. Nguyên Tắc Kiểm Thử Và Bằng Chứng Hoàn Thành
AI có thể sinh ra mã nguồn trông có vẻ đúng nhưng thực chất bị lỗi. Bắt buộc áp dụng vòng lặp kiểm tra: **Context -> Action -> Outside Check -> Stop Condition**. Một nhiệm vụ chỉ được coi là hoàn thành khi có bằng chứng thực tế (Command output, test pass, diff clean).
