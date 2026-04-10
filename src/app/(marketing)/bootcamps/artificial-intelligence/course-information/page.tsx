'use client'

import Link from 'next/link'
import { Container } from '@/components/container'
import { ChevronLeft } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const courseOverview = {
    title: 'Course Overview',
    content: `Learn to develop AI models with the world's most popular languages, tools, and techniques. From learning the basics of Python to creating your first artificial intelligence — whatever you want to create, we'll get you there.

We won't only teach you how to create industry-level projects, but also how to learn and adapt. At the end of 45 weeks, you'll graduate with a portfolio of projects and a professional portfolio ready to take on the AI specialist job market.`,
    highlights: [
        'Be mentored by a world-class AI specialist',
        'Small group classes (max 8 students)',
        '100% online programs',
    ],
    careerServices:
        "Career services is included with each capstone and bootcamp program. Designed by and for tech professionals, you'll experience a full technical interview process from start to finish, getting direct and personalized feedback each step of the way.",
}

const curriculum = [
    {
        section: 'AI and Data Science Essentials',
        modules: [
            {
                title: 'Introduction to Python',
                duration: 'FT: 1 week | PT: 3 weeks',
                description: "This introduction to Python course equips you with essential skills applicable to data science. You'll delve into fundamental programming concepts, operators, loops, and data structures. The course culminates in a project developing a Python script to analyze data.",
                learnings: [
                    'Apply the basics of programming language methodologies to real world scenarios',
                    'Demonstrate foundational skills for scripting with Python',
                ],
            },
            {
                title: 'Introduction to Data Science',
                duration: 'FT: 1 week | PT: 3 weeks',
                description: "An immersive journey into data analysis and visualization using Python. You'll learn essential statistical measures, explore different types of data, and master data analysis techniques using pandas, Seaborn, and Matplotlib.",
                learnings: [
                    'Implement foundational statistical measurement with data using scripting',
                    'Demonstrate gathering insights from data with visualizations',
                    'Integrate object oriented programming (OOP) with Python for data cleaning and analysis',
                ],
            },
            {
                title: 'Introduction to SQL',
                duration: 'FT: 1 week | PT: 3 weeks',
                description: "Learn essential skills in SQL, data engineering, database administration, and data analysis. You'll learn mathematics, probability, and statistics for data science as well as advanced data analysis and cleaning with Python.",
                learnings: [
                    'Utilize industry standard techniques to analyze data with Python, SQL, and the cloud',
                    'Explore and manipulate data with mathematics, probability, and statistics',
                    'Analyze data for a business problem with visualizations and dashboards',
                ],
            },
        ],
    },
    {
        section: 'AI and Data Science Foundations I',
        modules: [
            {
                title: 'Cloud Computing, Generative AI, & Dashboards',
                duration: 'FT: 1 week | PT: 3 weeks',
                description: "Dive into cloud computing's cost-effective, scalable ecosystem for distributed data processing. Master PySpark to bridge Python, SQL, and Spark. Explore generative AI and advanced dashboards.",
                learnings: [
                    'Create a dashboard using data science methodologies with industry standard tools',
                    'Model exploratory data analysis with SQL and SQL table relations',
                    'Utilize programming techniques to process large data samples with PySpark',
                ],
            },
            {
                title: 'Inferential Statistics',
                duration: 'FT: 1 week | PT: 3 weeks',
                description: "Perform statistical inference with Python. Learn about probability distributions, confidence intervals, hypothesis testing, and apply techniques to single proportions, means, and categorical data.",
                learnings: [
                    'Integrate statistical inference of data using technical programming',
                    'Implement methodologies for statistical inference',
                    'Utilize mathematics, statistics, and probability for data science methodologies',
                ],
            },
            {
                title: 'Regression',
                duration: 'FT: 1 week | PT: 3 weeks',
                description: "Master linear regression, multiple linear regression, and advanced techniques like transformations, interactions, and model selection. Explore bias-variance tradeoff and regularization methods like Lasso and Ridge regression.",
                learnings: [
                    'Perform logistic regression with data sets using Lasso and Ridge',
                    'Compare statistical results for different types of regression',
                    'Utilize mathematics, statistics, and probability to derive insights',
                ],
            },
        ],
    },
    {
        section: 'AI and Data Science Foundations II',
        modules: [
            {
                title: 'Introduction to Machine Learning',
                duration: 'FT: 1 week | PT: 3 weeks',
                description: "Learn the fundamentals of AI and machine learning models. Explore core concepts like statistical learning theory and supervised learning. Delve into logistic regression, decision trees, and support vector machines.",
                learnings: [
                    'Utilize foundational machine learning modeling like decision trees and supervised learning',
                    'Prepare data for machine learning modeling with preprocessing and normalization',
                    'Utilize mathematics, statistics, and probability for data science methodologies',
                ],
            },
            {
                title: 'Machine Learning with Scikit-Learn',
                duration: 'FT: 1 week | PT: 3 weeks',
                description: "Explore supervised and unsupervised machine learning models including k-Nearest Neighbors, recommender systems, k-means clustering, and dimensionality reduction with PCA.",
                learnings: [
                    'Utilize foundational machine learning modeling like decision trees and supervised learning',
                    'Prepare data for machine learning modeling with preprocessing and normalization',
                    'Integrate mathematics, statistics, and probability to derive insights',
                ],
            },
            {
                title: 'Natural Language Processing, Time Series & Neural Networks',
                duration: 'FT: 1 week | PT: 3 weeks',
                description: "Master NLP, exploring text classification and vectorization. Delve into time series analysis. Dive into neural networks with Keras. Build three distinct models: a language model, a time series model, and a basic neural network.",
                learnings: [
                    'Develop insights from language, time, and image data using neural networks and NLP',
                    'Integrate mathematics, statistics, and probability for data science methodologies',
                ],
            },
            {
                title: 'Neural Networks & Similar Models',
                duration: 'FT: 1 week | PT: 3 weeks',
                description: "Build upon your neural network foundation. Master CNNs for image classification, RNNs for forecasting, and explore transformers and BERT.",
                learnings: [
                    'Create an advanced neural network application',
                    'Integrate mathematics, statistics, and probability for data science methodologies',
                ],
            },
        ],
    },
    {
        section: 'AI and Data Science Capstone',
        modules: [
            {
                title: 'Large Language Models',
                duration: 'FT: 1 week | PT: 3 weeks',
                description: "Deploy and optimize cutting-edge machine learning systems. Explore the open-source MLOps stack, data-centric approaches for LLMs, fine-tuning pre-trained models, and prompt engineering.",
                learnings: [
                    'Utilize machine learning models and the open-source MLOps Stack',
                    'Integrate data-centric LLMs with data science methodologies',
                    'Leverage model fine-tuning and prompt engineering to optimize outputs',
                ],
            },
            {
                title: 'AI Capstone',
                duration: 'FT: 4 weeks | PT: 12 weeks',
                description: "Develop 2 portfolio projects framed around solving business problems. Build a classification supervised model and a classified unsupervised large language model.",
                learnings: [
                    'Integrate data science process using non-regression supervised learning',
                    'Integrate data science process using non-regression unsupervised learning',
                    'Utilize mathematics, statistics, & probability to derive business insights',
                ],
            },
        ],
    },
]

const tuitionInfo = {
    title: 'Tuition',
    tiers: [
        { name: 'Pay Upfront', price: '$9,900', detail: 'One-time payment' },
        { name: 'Pay as You Study', price: '$13,500', detail: '12 monthly payments of $1,125' },
        { name: 'Financed Tuition', price: '$14,900', detail: 'Monthly payments as low as $323' },
    ],
}

export default function CourseInformationPage() {
    return (
        <>
            <section className="overflow-hidden">
                <div className="relative">
                    <div
                        aria-hidden
                        className="h-14 lg:h-[73px]"
                    />

                    <Container className="border-b">
                        <div className="@4xl:px-10 mx-auto max-w-3xl px-4">
                            <Link
                                href="/bootcamps/artificial-intelligence"
                                className="text-muted-foreground hover:text-foreground mb-6 inline-flex items-center gap-1 text-sm transition-colors">
                                <ChevronLeft className="size-4" />
                                AI Bootcamp
                            </Link>
                            <h1 className="text-foreground text-balance text-5xl font-semibold tracking-tight sm:text-6xl">Course Information</h1>
                            <p className="text-muted-foreground mt-6">
                                Everything you need to know about the Artificial Intelligence Bootcamp curriculum, modules, and tuition.
                            </p>

                            {/* Course Overview */}
                            <div className="mt-12 space-y-6">
                                <h2 className="text-foreground text-3xl font-semibold">{courseOverview.title}</h2>
                                <h3 className="text-foreground text-xl font-medium">Kickstart a career in artificial intelligence</h3>
                                {courseOverview.content.split('\n\n').map((paragraph, i) => (
                                    <p key={i} className="text-muted-foreground leading-relaxed">{paragraph}</p>
                                ))}
                                <div className="mt-6">
                                    <p className="text-foreground font-medium">The Furman // Flatiron School difference:</p>
                                    <ul className="text-muted-foreground mt-3 list-disc space-y-2 pl-6">
                                        {courseOverview.highlights.map((h, i) => (
                                            <li key={i}>{h}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-6">
                                    <h3 className="text-foreground text-xl font-medium">Career services built-in</h3>
                                    <p className="text-muted-foreground mt-3 leading-relaxed">{courseOverview.careerServices}</p>
                                </div>
                            </div>

                            {/* Curriculum Accordion */}
                            <div className="mt-16 space-y-10">
                                <h2 className="text-foreground text-3xl font-semibold">Curriculum</h2>
                                {curriculum.map((section, sectionIndex) => (
                                    <div key={sectionIndex} className="space-y-4">
                                        <h3 className="text-foreground text-xl font-medium">{section.section}</h3>
                                        <Accordion
                                            type="single"
                                            collapsible
                                            className="space-y-2">
                                            {section.modules.map((module, index) => (
                                                <AccordionItem
                                                    key={index}
                                                    value={`s${sectionIndex}-m${index}`}
                                                    className="data-[state=open]:bg-card data-[state=open]:ring-foreground/5 rounded-xl border-none px-6 py-1 data-[state=open]:shadow data-[state=open]:ring-1">
                                                    <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                                                        <div className="flex items-center gap-3">
                                                            <span className="text-foreground font-medium">{module.title}</span>
                                                            <span className="text-muted-foreground bg-muted rounded-full px-2.5 py-0.5 text-xs">{module.duration}</span>
                                                        </div>
                                                    </AccordionTrigger>
                                                    <AccordionContent>
                                                        <p className="text-muted-foreground mb-4">{module.description}</p>
                                                        <p className="text-foreground mb-2 text-sm font-medium">What you&apos;ll learn:</p>
                                                        <ul className="text-muted-foreground list-disc space-y-1.5 pl-5 text-sm">
                                                            {module.learnings.map((item, i) => (
                                                                <li key={i}>{item}</li>
                                                            ))}
                                                        </ul>
                                                    </AccordionContent>
                                                </AccordionItem>
                                            ))}
                                        </Accordion>
                                    </div>
                                ))}
                            </div>

                            {/* Tuition */}
                            <div className="mt-16 space-y-6 pb-8">
                                <h2 className="text-foreground text-3xl font-semibold">{tuitionInfo.title}</h2>
                                <div className="grid gap-4 sm:grid-cols-3">
                                    {tuitionInfo.tiers.map((tier, index) => (
                                        <div
                                            key={index}
                                            className="bg-card ring-foreground/5 rounded-xl p-6 shadow ring-1">
                                            <p className="text-muted-foreground text-sm font-medium">{tier.name}</p>
                                            <p className="text-foreground mt-2 text-2xl font-semibold">{tier.price}</p>
                                            <p className="text-muted-foreground mt-1 text-sm">{tier.detail}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    )
}
