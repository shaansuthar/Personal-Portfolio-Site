<div align="center">
  <h3 align="center">A 3D Developer Portfolio</h3>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)

## <a name="introduction">🤖 Introduction</a>

By developing this project, you will gain hands-on experience in crafting immersive web experiences, mastering 3D libraries, and implementing engaging animations. The combination of creativity and technical skills showcased in this project serves as an excellent learning opportunity for developers seeking to enhance their portfolio and captivate users with cutting-edge web design.

If you're getting started and need assistance or face any bugs, join our active Discord community with over 27k+ members. It's a place where people help each other out.

<a href="https://discord.com/invite/n6EdbFJ" target="_blank"><img src="https://github.com/sujatagunale/EasyRead/assets/151519281/618f4872-1e10-42da-8213-1d69e486d02e" /></a>

## <a name="tech-stack">⚙️ Tech Stack</a>

- React.js
- Three.js
- React Three Fiber
- React Three Drei
- Email JS
- Next.js
- Tailwind CSS

## <a name="features">🔋 Features</a>

👉 **Interactive 3D Hero Section**: Includes a 3D drone model that can be rotated by the user.

👉 **Animated Work Experience, Leadership, and Projects Sections**: Utilizes animations powered by framer motion for engaging UI.

👉 **3D Skills Section**: Showcases skills using 3D geometries through three.js and React Three fiber

👉 **Contact Section with 3D Earth Model**:Integrates a 3D earth model with email functionality powered by emailjs.

👉 **3D Stars**: Generate stars progressively at random positions using Three.js for the contact section.

👉 **Consistent Animations**: Implements cohesive animations throughout the website using framer motion.

👉 **Responsive Design**: Ensures optimal display and functionality across all devices.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/shaansuthar/Personal-Portfolio-Site.git
cd Personal-Portfolio_Site
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
NEXT_PUBLIC_PORTFOLIO_EMAILJS_SERVICE_ID="your_emailjs_user_id"
NEXT_PUBLIC_PORTFOLIO_EMAILJS_TEMPLATE_ID="your_emailjs_template_id"
NEXT_PUBLIC_PORTFOLIO_EMAILJS_PUBLIC_KEY="your_emailjs_receiver_id"
```

Replace the placeholder values with your actual EmailJS credentials. You can obtain these credentials by signing up on the [EmailJS website](https://www.emailjs.com/).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.
