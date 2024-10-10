<div align="center">
  <h1 align="center">A 3D Portfolio</h3>
</div>

<img width="1728" alt="Screenshot 2024-10-09 at 7 28 24 PM" src="https://github.com/user-attachments/assets/d7231938-d959-4b2c-aaee-f6926cebd1c1">

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)

## <a name="introduction">🤖 Introduction</a>

I decided to redo my portfolio site a year later and this is the result of that. This is my first attempt at using 3D models. Through iterating I realized I needed Server Side Rendering to optimize the performance for all the 3D components having to be rendered, which is how I ended up using Next.js. Ultimately a good learning experience for me and feel free to fork this and use it for your own portfolios!

View the live site [here](https://shaansuthar.com/).

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
