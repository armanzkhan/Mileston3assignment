export interface Blog {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  button: string;
  content: {
    p: string;
    p1: string;
    p2: string;
    p3: string;
    h1: string;
    h2: string;
    h3: string;
    List1: string;
    List2: string;
  };
  image: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  tags: string[];
}

export const blogs: Blog[] = [
  {
    id: "1",
    slug: "Every-day-AI",
    title: "The Everyday Impact of Artificial Intelligence",
    excerpt:
      "Artificial Intelligence (AI) is no longer a futuristic concept; it's a part of our everyday lives",
    button: "Read More",
    image: "/images/5.jpg",
    content: {
      p: "AI, is a branch of computer science that aims to create intelligent machines that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.",
      h1: "AI in Our Daily Lives",
      p1: "AI continues to evolve, its influence grows, shaping the future of industries, jobs, and even social interactions. Exploring AI in daily life helps us understand both its immense potential and the challenges it presents.",
      List1: `<ul>
<li><strong>Voice Assistants:</strong>  AI powers voice recognition to assist with tasks like setting reminders, controlling smart devices, and answering questions.</li>
<li><strong>Smartphones:</strong> AI helps in facial recognition, predictive text, photo enhancement, and app suggestions based on usage patterns.</li>
<li><strong>Navigation and Traffic Apps:</strong>AI analyzes real-time traffic data to suggest optimal routes, predict arrival times, and avoid delays..</li>
<li><strong>Email Filters and Spam Detection:</strong>AI algorithms automatically filter out spam and categorize emails based on content and context.</li>
</ul>`,
      h2: "How We Live and Work",
      p2: "AI continues to evolve, its ability to enhance our work-life balance and efficiency will only increase, creating more opportunities for innovation and ease in our daily lives.",
      List2: `<ul>
<li><strong>AI helps tailor entertainment options based on our preferences. Streaming services like Netflix and Spotify use AI to recommend shows, movies, and music suited to your tastes, while gaming companies use AI to create smarter, more immersive game environments.</li>
<li><strong>Financial Assistance:</strong>  In finance, AI helps with everything from fraud detection to budgeting and investment recommendations.</li>
<li><strong>AI in Education:</strong> Personalized learning powered by AI is becoming more prevalent in schools and online platforms. </li>
<li><strong>AI in Healthcare::</strong>AI is transforming healthcare by enabling more accurate diagnoses, personalized treatments, and even remote patient monitoring. AI-driven tools help doctors analyze medical images, predict health risks, and recommend treatments tailored to individual needs, improving patient outcomes.</li>
</ul>`,
      h3: " AI is Enhancing Our Lives",
      p3: " Artificial Intelligence is making a profound impact across multiple sectors, revolutionizing how we interact with technology and improving efficiency.",
    },
    date: "2023-04-06",
    tags: ["Personalization", "Technology", "EducationAI"],
    author: {
      name: "Abdullah Haroon",
      avatar: "/avatar/john.jpg",
    },
  },
  {
    id: "2",
    slug: "Career-Success-Without-Doubt",
    title: "Conquering Impostor Syndrome for Career Success",
    excerpt:"Impostor syndrome is a common psychological pattern where individuals doubt their accomplishments and fear being exposed as a 'fraud,' despite evidence of their success.",
    button: "Read More",
    image: "/images/6.jpg",
    content: {
      p: "Impostor syndrome can be a major barrier to career success, causing individuals to feel like they don't deserve their achievements or that they're frauds despite evidence to the contrary. ",
      h1: "Impostor Syndrome: ",
      p1: "Impostor Syndrome is a psychological pattern where individuals doubt their abilities and feel like frauds, even when they have clear evidence of their competence and accomplishments",
      List1: `
            <ul>
            <li><strong>Self-Doubt:</strong> Feeling like you don't deserve your accomplishments or are not qualified for your role.</li>
            <li><strong>Perfectionism:</strong> Setting high standards for yourself and feeling like you have to excel in everything you do.</li>
            <li><strong>Overworking:</strong> Working long hours and taking on extra tasks to prove your worth.</li>
            <li><strong>Discounting Success:</strong> Minimizing your achievements and attributing them to external factors.</li>
            </ul>`,
      h2: "Understanding Impostor Syndrome and Its Impact",
      p2: "Impostor Syndrome is a psychological pattern that undermines confidence and self-worth, impacting personal growth and professional success.",
      List2: `<ul>
            <li><strong>Recognize Your Achievements:</strong> Keep a record of your accomplishments and review them regularly to remind yourself of your skills and abilities.</li>
            <li><strong>Challenge Negative Thoughts:</strong> Identify and challenge negative thoughts and beliefs that contribute to impostor syndrome.</li>
            <li><strong>Seek Support:</strong> Talk to friends, family, or a mentor about your feelings of impostor syndrome and seek their support and encouragement.</li>
            <li><strong>Practice Self-Compassion:</strong> Be kind to yourself and practice self-compassion by treating yourself with the same kindness and understanding you would offer to a friend.</li>
            </ul>`,
      h3: "Signs of Impostor Syndrome in Daily Life",
      p3: "Constant self-doubt, fear of being exposed as a fraud, and attributing success to luck are common signs of Impostor Syndrome in daily life.",
    },
    date: "2022-04-13",
    tags: ["SelfConfidence", "SuccessMindset", "CareerGrowth"],
    author: {
      name: "Aqsa Basra",
      avatar: "/avatar/olivia.jpg",
    },
  },
  {
    id: "3",
    slug: "Story-telling-And-Communities",
    title: "How Storytelling Builds and Strengthens Communities",
    excerpt:
      "Storytelling is a powerful tool that connects people, sharing experiences, values, and traditions across generations.",
    button: "Read More",
    image: "/images/4.jpg",
    content: {
      p: "Storytelling is a powerful tool that connects people by sharing experiences, values, and traditions across generations.",
      h1: " Storytelling Unites and Strengthens Communities",
        p1: "Storytelling unites and strengthens communities by sharing shared experiences, values, and histories that foster connection, understanding, and a sense of belonging",
      List1: `
            <ul>
            <li><strong>Emotional Connection:</strong> Stories have the power to evoke emotions, create connections, and inspire action.</li>
            <li><strong>Cultural Preservation:</strong> Storytelling plays a vital role in preserving cultural traditions, values, and beliefs for future generations.</li>
            <li><strong>Identity Formation:</strong> Stories help us make sense of our experiences, shape our identities, and connect with others who share similar values and beliefs.</li>
            <li><strong>Community Building:</strong> Storytelling brings people together, fosters a sense of belonging, and creates a shared sense of purpose and identity.</li>
            </ul>`,
      h2: "The Role of Storytelling in Fostering Connection and Belonging",
      p2: "Storytelling fosters connection and belonging by allowing individuals to relate to one another's experiences, creating a shared sense of identity and community.",
      List2: `
            <ul>
            <li><strong>Community Building:</strong> Storytelling can bring people together, create a sense of belonging, and foster connections among diverse groups of people.</li>
            <li><strong>Brand Building:</strong> Brands use storytelling to create emotional connections with their audience, build brand loyalty, and differentiate themselves from competitors.</li>
            <li><strong>Education and Advocacy:</strong> Storytelling can be a powerful tool for educating and advocating for social change, raising awareness of important issues, and inspiring action.</li>
            <li><strong>Personal Development:</strong> Sharing personal stories can help individuals reflect on their experiences, gain new perspectives, and connect with others who have similar experiences.</li>
            </ul>`,
      h3: "Storytelling Bridges Cultural Gaps and Creates Empathy.",
      p3: "Storytelling bridges cultural gaps and creates empathy by sharing diverse perspectives, helping individuals understand and appreciate experiences beyond their own.",
    },
    date: "2022-08-19",
    tags: ["Storytelling", "CommunityBuildin", "BuildingCommunities"],
    author: {
      name: "Huma Ahmed",
      avatar: "/avatar/emma.jpg",
    },
  },
  {
    id: "4",
    slug: "path-to-profitable-side-hustle",
    title: "Launching a Side Hustle: From Idea to Profitability",
    excerpt:
      "Starting a side hustle can be a great way to earn extra income and pursue your passions. But how do you start a side hustle, and how can you make it profitable?",
    button: "Read More",
    image: "/images/2.jpg",
    content: {
      p: "A side hustle is a business or project that you work on in addition to your full-time job. Side hustles can take many forms, from freelance work to selling products online to offering services in your local community. The key to a successful side hustle is finding a business idea that aligns with your skills, interests, and goals.",
      h1: "how-to-start-side-hustle",
      p1: "Starting a side hustle requires careful planning and execution. Here are some steps to help you get started:",
      List1: `
            <ul>
            <li><strong>Identify Your Skills and Interests:</strong> Consider your skills, interests, and passions to identify potential business ideas that align with your strengths.</li>
            <li><strong>Research the Market:</strong> Conduct market research to identify potential customers, competitors, and trends in your industry.</li>
            <li><strong>Create a Business Plan:</strong> Develop a business plan that outlines your business idea, target market, revenue model, and marketing strategy.</li>
            <li><strong>Set Up Your Business:</strong> Register your business, set up a website or online store, and create a marketing plan to promote your products or services.</li>
            </ul>`,
      h2: "Turning Your Side Hustle Idea into a Profitable Venture",
      p2: "Making your side hustle profitable requires dedication, hard work, and strategic planning. Here are some tips to help you make your side hustle profitable:",
      List2: `
            <ul>
            <li><strong>Set Clear Goals:</strong> Define your financial goals, target market, and key performance indicators to track your progress and measure success.</li>
            <li><strong>Focus on Customer Value:</strong> Provide value to your customers by offering high-quality products or services, excellent customer service, and competitive pricing.</li>
            <li><strong>Manage Your Time Wisely:</strong> Balance your full-time job, side hustle, and personal life by setting boundaries, prioritizing tasks, and managing your time effectively.</li>
            <li><strong>Invest in Marketing:</strong> Promote your side hustle through social media, email marketing, and other channels to reach your target audience and attract new customers.</li>
            </ul>`,
      h3: "Steps to Successfully Launch Your Side Hustle",
      p3: "Successfully launching your side hustle involves several key steps, starting with identifying a viable idea that aligns with your skills and interests. Conduct market research to understand your target audience and competition, then create a clear business plan to outline your goals, strategies, and financial projections. Start small, test your concept, and refine it based on feedback. Leverage digital tools and platforms to market your side hustle effectively, and manage your time wisely to balance it with your primary commitments. With consistency and adaptability, your side hustle can grow into a sustainable and profitable endeavor.",
    },
    date: "2021-01-07",
    tags: ["TimeManagement", "DigitalMarketingForHustlers", "Side Hustle Success"],
    author: {
      name: "Hamid Abdullah",
      avatar: "/avatar/michael.jpg",
    },
  },
  {
    id: "5",
    slug: "study-work-focus-home",
    title: "Staying Focused: Tips for Studying and Working from Home",
    excerpt:
      "Working or studying from home can be challenging, especially when it comes to staying focused. But with the right strategies, you can stay on track and be productive.",
    button: "Read More",
    image: "/images/3.jpg",
    content: {
      p: "Working or studying from home offers many benefits, such as flexibility, comfort, and convenience. However, it also comes with its own set of challenges, including distractions, lack of structure, and difficulty staying focused. To stay focused while working or studying from home, it's important to create a conducive environment, set clear goals, and establish a routine that works for you.",
      h1: "Tips for Staying Focused",
      p1: "Staying focused while working or studying from home requires discipline, self-control, and effective time management. Here are some tips to help you stay on track and be productive:",
      List1: `
            <ul>
            <li><strong>Create a Dedicated Workspace:</strong> Set up a designated workspace that is free from distractions and conducive to productivity.</li>
            <li><strong>Establish a Routine:</strong> Develop a daily routine that includes set work hours, breaks, and time for relaxation and self-care.</li>
            <li><strong>Set Clear Goals:</strong> Define your goals, priorities, and tasks for the day to stay organized and focused on what matters most.</li>
            <li><strong>Minimize Distractions:</strong> Identify and eliminate distractions in your environment, such as noise, clutter, or interruptions from family members or pets.</li>
            </ul>`,
      h2: "stay-productive-at-home",
      p2: "Staying productive at home can be challenging, but with the right strategies, it's achievable. Set a clear routine and establish a designated workspace to avoid distractions:",
      List2: `
            <ul>
            <li><strong>Use Time Management Techniques:</strong> Practice time-blocking, the Pomodoro Technique, or other time management strategies to stay focused and manage your time effectively.</li>
            <li><strong>Take Regular Breaks:</strong> Take short breaks throughout the day to rest, recharge, and prevent burnout.</li>
            <li><strong>Stay Active:</strong> Incorporate physical activity into your daily routine to boost your energy, focus, and overall well-being.</li>
            <li><strong>Stay Connected:</strong> Stay connected with colleagues, classmates, or friends through virtual meetings, messaging apps, or social media to combat feelings of isolation and stay motivated.</li>
            </ul>`,
      h3: "Strategies to Maintain Focus While Studying or Working from Home",
      p3: "Maintaining focus while studying or working from home requires a structured approach. Start by creating a dedicated workspace free from distractions to establish a boundary between personal and professional life. Set clear goals and prioritize tasks using techniques like time blocking or the Pomodoro Technique. Minimize interruptions by communicating your schedule with others and silencing unnecessary notifications.",
    },
    date: "2023-12-08",
    tags: ["Productivity", "Remote Work", "Study Tips"],
    author: {
      name: "Maryam Murtaza",
      avatar: "/avatar/sophia.jpg",
    },
  },
  {
    id: "6",
    slug: "healthy-lifestyle-for-stress-management",
    title: "Managing Stress Through Exercise and Healthy Nutrition",
    excerpt:
      "Stress is a common experience for many people, but it can have serious consequences for your health. Luckily, there are ways to manage stress through exercise and nutrition.",
    button: "Read More",
    image: "/images/image1.jpg",
    content: {
      p: "Stress is a natural response to challenging or threatening situations, but chronic stress can have negative effects on your physical and mental health. Exercise and nutrition are two key components of stress management that can help you reduce stress, improve your mood, and boost your overall well-being.",
      h1: "The Role of Exercise in Stress Management",
      p1: "Exercise is a powerful stress-reliever that can help you manage stress, improve your mood, and boost your energy levels. Regular physical activity has been shown to reduce stress hormones, increase endorphins, and improve sleep quality, all of which can help you cope with stress more effectively.",
      List1: `
            <ul>
            <li><strong>Improved Physical Health:</strong> Exercise can help reduce the risk of chronic diseases, such as heart disease, diabetes, and obesity, that are associated with chronic stress.</li>
            <li><strong>Enhanced Mental Health:</strong> Exercise has been shown to reduce symptoms of anxiety, depression, and other mental health conditions by releasing endorphins and improving mood.</li>
            <li><strong>Stress Reduction:</strong> Physical activity can help reduce stress hormones, such as cortisol, and increase endorphins, which are natural mood-boosters.</li>
            <li><strong>Better Sleep:</strong> Regular exercise can improve sleep quality, reduce insomnia, and help you relax and unwind after a long day.</li>
            </ul>`,
      h2: " Nutrition's Impact on Stress and Well-Being",
      p2: "Nutrition plays a key role in stress management by providing your body with the nutrients it needs to function optimally. Eating a balanced diet that includes a variety of fruits, vegetables, whole grains, lean proteins, and healthy fats can help you maintain stable blood sugar levels, reduce inflammation, and support your immune system, all of which can help you manage stress more effectively.",
      List2: `
            <ul>
            <li><strong>Exercise Regularly:</strong> Engage in regular physical activity, such as walking, running, yoga, or strength training, to reduce stress and improve your overall well-being.</li>
            <li><strong>Eat a Balanced Diet:</strong> Consume a variety of nutrient-dense foods, such as fruits, vegetables, whole grains, lean proteins, and healthy fats, to support your physical and mental health.</li>
            <li><strong>Stay Hydrated:</strong> Drink plenty of water throughout the day to stay hydrated and maintain optimal bodily functions.</li>
            <li><strong>Get Adequate Sleep:</strong> Aim for 7-9 hours of quality sleep each night to rest and recharge your body and mind.</li>
            </ul>`,
      h3: " Balanced Routine for Stress Relief through Exercise",
      p3: "Stress is a common experience that can have serious consequences for your health if left unmanaged. By incorporating exercise and nutrition into your daily routine, you can reduce stress, improve your mood, and boost your overall well-being. Remember to listen to your body, prioritize self-care, and seek support from friends, family, or a healthcare professional if you need help managing stress.",
    },
    date: "2023-10-05",
    tags: ["Healthy Life style", " Mental Wellness", "Stress Management"],
    author: {
      name: "Dawood Khan",
      avatar: "/avatar/david.jpg",
    },
  },
];

export async function getPostBySlug(slug: string) {
  return blogs.find((post) => post.slug === slug);
}
