import { BlogPostItemsMap } from "@/types";

export const blogPosts: BlogPostItemsMap = {
  "blog-post-1": {
    id: "blog-post-1",
    title: "Designing for Accessibility: Modern Web Practices",
    date: "March 15, 2025",
    author: "Tate McCormick",
    excerpt:
      "Exploring how modern web design can embrace accessibility without compromising aesthetics. Learn key techniques to make your websites more inclusive.",
    content: `
      <div class="blog-content">
        <p>In today's digital landscape, creating accessible websites isn't just a nice-to-have — it's essential. According to the World Health Organization, more than one billion people worldwide live with some form of disability. That's approximately 15% of the global population who may face barriers when trying to access and use your website.</p>
        
        <h2>Why Accessibility Matters</h2>
        <p>Beyond the ethical considerations of inclusive design, there are practical business reasons to prioritize accessibility:</p>
        <ul>
          <li>Expanded audience reach</li>
          <li>Improved SEO performance</li>
          <li>Protection against potential legal issues</li>
          <li>Enhanced user experience for <em>all</em> users</li>
        </ul>
        
        <h2>Key Accessibility Principles</h2>
        <p>When designing for accessibility, focus on these fundamental areas:</p>
        
        <h3>1. Semantic HTML</h3>
        <p>Using proper HTML elements communicates structure to assistive technologies:</p>
        <pre><code>&lt;nav&gt; instead of &lt;div class="navigation"&gt;
&lt;button&gt; instead of &lt;div onclick="..."&gt;
&lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, etc. for proper document structure</code></pre>
        
        <h3>2. Color Contrast</h3>
        <p>WCAG 2.1 guidelines recommend a minimum contrast ratio of 4.5:1 for normal text and 3:1 for large text. Tools like the WebAIM Contrast Checker can help ensure your color choices meet these standards.</p>
        
        <h3>3. Keyboard Navigation</h3>
        <p>Many users navigate exclusively with keyboards. Ensure all interactive elements can be accessed and operated without a mouse:</p>
        <ul>
          <li>Logical tab order</li>
          <li>Visible focus states</li>
          <li>Keyboard-accessible custom components</li>
        </ul>
        
        <h3>4. Screen Reader Compatibility</h3>
        <p>Screen readers announce content to users with visual impairments. To support these tools:</p>
        <ul>
          <li>Add alternative text for images</li>
          <li>Use ARIA attributes when necessary (but prefer semantic HTML)</li>
          <li>Create descriptive links (avoid "click here")</li>
        </ul>
        
        <h2>Modern Accessibility Techniques</h2>
        <p>Modern frameworks and CSS capabilities make it easier than ever to build accessible interfaces:</p>
        
        <h3>Using CSS Grid and Flexbox</h3>
        <p>These layout systems maintain proper source order while creating complex visual arrangements, which helps screen reader users navigate your content in a logical sequence.</p>
        
        <h3>Dark Mode Support</h3>
        <p>Implementing dark mode can help users with light sensitivity or those who prefer reduced brightness. Use CSS custom properties to manage color themes:</p>
        <pre><code>:root {
  --text-color: #333;
  --background-color: #fff;
}

@media (prefers-color-scheme: dark) {
  :root {
    --text-color: #eee;
    --background-color: #121212;
  }
}</code></pre>
        
        <h3>Reduced Motion</h3>
        <p>Animations can trigger discomfort or even vestibular disorders in some users. Respect user preferences:</p>
        <pre><code>@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.001ms !important;
    transition-duration: 0.001ms !important;
  }
}</code></pre>
        
        <h2>Testing Your Accessibility Implementation</h2>
        <p>Regular testing is crucial to ensure your website remains accessible. Consider using:</p>
        <ul>
          <li>Automated tools like Lighthouse, WAVE, or axe</li>
          <li>Keyboard navigation testing</li>
          <li>Screen reader testing with VoiceOver (macOS/iOS) or NVDA (Windows)</li>
          <li>User testing with people who have disabilities</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Designing for accessibility doesn't mean sacrificing aesthetics or innovation. By embracing these principles from the start of your design process, you can create beautiful, functional websites that everyone can use and enjoy.</p>
        
        <p>The web was designed to work for all people, whatever their hardware, software, language, location, or ability. When we fulfill this promise, we empower everyone to participate equally in our increasingly digital society.</p>
      </div>
    `,
    tags: ["Accessibility", "Web Design", "UX", "Inclusive Design", "Frontend"],
    image: "/images/blog/accessibility-header.jpg", // Update with your image path
    color: "#6366F1", // Indigo color
    icon: "📝",
  },

  "blog-post-2": {
    id: "blog-post-2",
    title: "The Future of React: What's Coming in 2025 and Beyond",
    date: "February 28, 2025",
    author: "Tate McCormick",
    excerpt:
      "Exploring the latest updates to React and what they mean for frontend developers. From concurrent rendering to server components, the future is exciting.",
    content: `
      <div class="blog-content">
        <p>React has been at the forefront of frontend development for nearly a decade, continuously evolving to meet the changing needs of web developers. In this post, we'll explore what's on the horizon for React in 2025 and beyond.</p>
        
        <h2>Server Components: The New Default</h2>
        <p>With the full adoption of React Server Components, we're seeing a fundamental shift in how React applications are built and delivered. Unlike traditional components that execute entirely in the browser, server components run on the server and stream their output to the client.</p>
        
        <p>This approach offers several significant advantages:</p>
        <ul>
          <li>Reduced JavaScript bundle sizes</li>
          <li>Improved initial load performance</li>
          <li>Direct access to server-side resources without APIs</li>
          <li>Better SEO without complex SSR setups</li>
        </ul>
        
        <h2>Concurrent Rendering Everywhere</h2>
        <p>Concurrent Mode is now fully integrated into React's core, allowing components to render without blocking the main thread. This means more responsive UIs, even during complex updates, as React can pause and resume work as needed.</p>
        
        <p>We're seeing this particularly shine in complex dashboards and data-heavy applications, where updates can happen across multiple components simultaneously without causing UI jank.</p>
        
        <h2>React Compiler Optimization</h2>
        <p>The React team has been working on a compiler approach that can automatically optimize your components. By analyzing how state flows through your application, it can eliminate unnecessary re-renders and reduce memory usage.</p>
        
        <p>This is particularly exciting because it delivers performance improvements without requiring developers to manually optimize with <code>useMemo</code>, <code>useCallback</code>, or <code>React.memo</code>.</p>
        
        <h2>First-Class TypeScript Integration</h2>
        <p>While TypeScript has been widely used with React for years, we're seeing tighter integration directly in React's core APIs. New type utilities and improved inference are making it easier to type complex patterns like higher-order components and render props.</p>
        
        <h2>Sustainability Focus</h2>
        <p>An interesting development has been React's focus on energy efficiency. New metrics and tools are emerging to measure and optimize the energy consumption of React applications, particularly important for mobile users and global markets with energy constraints.</p>
        
        <h2>Ecosystem Evolution</h2>
        <p>The React ecosystem continues to evolve alongside the core library:</p>
        
        <h3>State Management</h3>
        <p>While Redux remains popular, we're seeing increased adoption of Jotai, Zustand, and React Query for different state management needs. The trend is toward more specialized tools rather than one-size-fits-all solutions.</p>
        
        <h3>Styling Solutions</h3>
        <p>CSS-in-JS libraries are focusing more on zero-runtime or server-extraction approaches to avoid the performance penalties of client-side style injection. Tailwind CSS continues to be popular, with better tooling for component-based architectures.</p>
        
        <h3>Meta-Frameworks</h3>
        <p>Next.js and other meta-frameworks are becoming increasingly sophisticated, abstracting away more of the complex infrastructure decisions while providing flexible deployment options from edge functions to static generation.</p>
        
        <h2>Looking Ahead</h2>
        <p>What's most exciting about React's future is how it's adapting to changing web standards. As the platform becomes more capable with features like Web Components, native HTTP streaming, and improved CSS capabilities, React is evolving to be a thinner layer that leverages these platform features rather than reimplementing them.</p>
        
        <p>For developers, this means learning React continues to be a valuable investment, as the skills transfer well to understanding the evolving web platform itself.</p>
      </div>
    `,
    tags: ["React", "JavaScript", "Web Development", "Frontend"],
    image: "/images/blog/react-future.jpg", // Update with your image path
    color: "#2563EB", // Blue color
    icon: "⚛️",
  },
};
