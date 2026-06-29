export interface Certification {
  title: string;
  issuer: string;
  date: string;
  type: string;
  validationLink: string;
  image: string;
  tags: string[];
  featured: boolean;
  level: 1 | 2 | 3;
}

export const CERTIFICATIONS: Certification[] = [
  // Level 3 Certifications
  {
    title: "Deep Learning using TensorFlow",
    issuer: "IBM",
    date: "Jun 2022",
    type: "Digital",
    validationLink: "https://www.credly.com/badges/4e401794-8b9c-4fdd-8fde-b6c86b7de318/public_url",
    image: "/assets/certifications/deep-learning-using-tensorflow.png",
    tags: [
      "Deep Learning",
      "TensorFlow",
      "Autoencoders",
      "CNN",
      "RNN",
      "Deep-learning Networks"
    ],
    featured: true,
    level: 3
  },
  {
    title: "Accelerated Deep Learning with GPU",
    issuer: "IBM",
    date: "Jul 2022",
    type: "Digital",
    validationLink: "https://www.credly.com/badges/bc98b1c0-dc5c-4ef2-ae59-181673efb995/public_url",
    image: "/assets/certifications/accelerated-deep-learning-with-gpu.png",
    tags: [
      "Deep Learning",
      "Accelerated Learning",
      "Distributed Learning",
      "GPU"
    ],
    featured: true,
    level: 3
  },
  // Level 2 Certifications
  {
    title: "Data Visualization using Python",
    issuer: "IBM",
    date: "Jul 2022",
    type: "Digital",
    validationLink: "https://www.credly.com/badges/bb95a38a-53b2-42ee-8d8e-cd927077b70b/public_url",
    image: "/assets/certifications/data-visualization-using-python.png",
    tags: [
      "Data Visualization",
      "Python",
      "Matplotlib",
      "Seaborn"
    ],
    featured: false,
    level: 2
  },
  {
    title: "Data Analysis using Python",
    issuer: "IBM",
    date: "Jun 2022",
    type: "Digital",
    validationLink: "https://www.credly.com/badges/0881f14a-735c-4ad4-9571-debbbc495007/public_url",
    image: "/assets/certifications/data-analysis-using-python.png",
    tags: [
      "Data Analysis",
      "Python",
      "Jupyter",
      "Pandas"
    ],
    featured: false,
    level: 2
  },
  {
    title: "Deep Learning Essentials",
    issuer: "IBM",
    date: "Jun 2022",
    type: "Digital",
    validationLink: "https://www.credly.com/badges/6745cf02-fc9f-4fe3-8e33-0e9a4e29fd4a/public_url",
    image: "/assets/certifications/deep-learning-essentials.png",
    tags: [
      "Data Science",
      "Deep Learning",
      "Neural Networks",
      "CNN"
    ],
    featured: false,
    level: 2
  },
  // Level 1 Certifications
  {
    title: "Python for Data Science",
    issuer: "IBM",
    date: "Jun 2022",
    type: "Digital",
    validationLink: "https://www.credly.com/badges/ed219eac-f175-4e62-a32c-d6977f2262b6/public_url",
    image: "/assets/certifications/python-for-data-science.png",
    tags: [
      "Data Science",
      "Python",
      "Pandas",
      "Numpy"
    ],
    featured: false,
    level: 1
  },
  {
    title: "Applied Data Science with Python - Level 2",
    issuer: "IBM",
    date: "Jul 2022",
    type: "Digital",
    validationLink: "https://www.credly.com/badges/4474fec6-8995-4802-98dd-92f82e4f8c5/public_url",
    image: "/assets/certifications/applied-data-science-with-python-level-2.png",
    tags: [
      "Matplotlib",
      "Python"
    ],
    featured: false,
    level: 1
  },
  {
    title: "Deep Learning",
    issuer: "IBM",
    date: "Jul 2022",
    type: "Digital",
    validationLink: "https://www.credly.com/badges/9a628031-bc76-4111-acd6-74c34b35d0dc/public_url",
    image: "/assets/certifications/deep-learning.png",
    tags: [
      "Deep Learning",
      "TensorFlow",
      "Neural Networks"
    ],
    featured: false,
    level: 1
  }
];
