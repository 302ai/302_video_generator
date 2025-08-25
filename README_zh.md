# <p align="center">🎬 AI 视频生成器 🚀✨</p>

<p align="center">AI视频生成器根据文本和图片，通过Luma、Runway gen-3、kling可灵、CogVideoX智谱等业内领先的视频大模型生成高质量的AI视频。</p>

<p align="center"><a href="https://302.ai/product/detail/26" target="blank"><img src="https://file.302.ai/gpt/imgs/github/20250102/72a57c4263944b73bf521830878ae39a.png" /></a></p >

<p align="center"><a href="README_zh.md">中文</a> | <a href="README.md">English</a> | <a href="README_ja.md">日本語</a></p>

![v-gen](docs/AI视频生成器.png)

这是来自[302.AI](https://302.ai)的[AI视频生成器](https://302.ai/product/detail/26)开源版本。你可以直接登录302.AI，零代码零基础使用在线版本，或根据自己的需求修改并自行部署。

## 界面预览
AI根据输入的描述，使用选择的模型生成视频。
![v-gen](docs/zh.png)

## 项目特性

### 🎥 AI视频生成器
  支持多种图片生成视频模型，快速生成定制视频。
### 🖼️ 本地图片裁切
  支持对本地图片裁切后生成视频。
### 🔄 任务管理
  视频任务支持重新生成，视频拓展再次编辑。
### ⚙️ 多模型支持
  可根据不同模型提供不同配置选项，包括镜头控制、视频特效等。
### 📜 历史记录
  保存您的创作历史,记忆不丢失，随时随地都可以下载。
### 🌓 暗色模式
  随心切换，保护您的眼睛。
### 🌍 多语言支持
  - 中文界面
  - English Interface
  - 日本語インターフェース

## 🚩 未来更新计划
- [ ] 提供更丰富的视频风格选项，并且允许用户进行更精细的个性化风格控制
- [ ] 跨模型融合与模型性能优化
  
## 技术栈

- Next.js 14 基础框架
- Tailwind CSS + Shadcn UI 样式UI
- Zod + react-hook-form 表单处理
- Zustand 作为数据管理

## 开发&部署

1. 克隆项目 `git clone git@github.com:302ai/302_video_generator.git`
2. 安装依赖 `pnpm install`
3. 配置302的API KEY 参考.env.example
4. 运行项目 `pnpm dev`
5. 打包部署 `docker build -t video-generator . && docker run -p 3000:3000 video-generator`


## ✨ 302.AI介绍 ✨

[302.AI](https://302.ai)是一个面向企业的AI应用平台，按需付费，开箱即用，开源生态。✨

1. 🧠 集合了最新最全的AI能力和品牌，包括但不限于语言模型、图像模型、声音模型、视频模型。
2. 🚀 在基础模型上进行深度应用开发，我们开发真正的AI产品，而不是简单的对话机器人。
3. 💰 零月费，所有功能按需付费，全面开放，做到真正的门槛低，上限高。
4. 🛠 功能强大的管理后台，面向团队和中小企业，一人管理，多人使用。
5. 🔗 所有AI能力均提供API接入，所有工具开源可自行定制（进行中）。
6. 💡 强大的开发团队，每周推出2-3个新应用，产品每日更新。有兴趣加入的开发者也欢迎联系我们。
