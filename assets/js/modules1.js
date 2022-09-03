export const module = {
  infoCard: `<h2>What is it about?</h2>
      <span>
      An introduction into the topic of computer science.
      </span>
      `,

  id: 1,
  title: "Launching into Computer Science",
  
  outcomes: [
    "Examine the professional roles, skillsets, ethical responsibilities of computer science professionals",
    "Examine the relevant computing architectures, practices, applications, data representation and standards in both hardware and software perspectives",
    "Develop an understanding of key computational theories and programming concepts",
    "Develop an increasing confidence in applyting efficient algorithm and programming practices",
    "Develop an ethos of professional development, highlighting major ethical-social-corporate responsibilities underpinning the concepts of threats, securities and global impacts prevailing in recent technological innovations.",
  ],
  units: [
    {
      title: "Unit 1",
      description:
        "Computing as a Profession - Responsibilities and Challenges",
      outcomes: [
        "Appreciate the roles and responsibilities of computer professionals.",
        "Examine the various challenges and threats a computer professional may deal with.",
        "Apply the professional ethics and code of conduct in computing practices.",
      ],
      activities: [
        {
          title: "Discussion Forum",
          description: "Review an IT organisation's Code of Conduct and reflect on <strong>areas of improvement</strong>, <strong>best practices</strong>, or <strong>incidents</strong>.",
          ref: "pdf",
          href: "../assets/artefacts/module1/M1-Discussion_1_GDPR.pdf",
          type: "discussion"
        },
      ],
      writing: "../assets/artefacts/module1/Reflections-M1-U1.pdf",
      reading: {
        required: [
          "Read sections 4.6, 9.7 and 11.7 from the core textbook: Brookshear, J. and Brylow, D. (2018), Computer Science - An Overview. 13th ed. Harlow: Pearson.",
          "BCS code of conduct that are introduced by IT driven organisations. : Read the four key principles of the: BCS Code of Conduct forComputing Professionals (2019)",
          "Read about GDPR: European Commission. (2019) Data protection. Rules for the protection of personal data inside and outside the EU. Brussels: European Commission.",
          "Read the full version of: IEEE-CS/ACM Joint Task Force on Software Engineering Ethics and Professional Practices (2019)",
        ],
        optional: [
          "Herschel, R. T. and Andres, P. H. (1997) Ethical Implications of Technological Advances on Business Communication. The Journal of Business Communication 34(2): 160-170.",
          "Moor, J. H. (1985) What is computer ethics? Metaphilosophy 16(4): 266–275.",
          "Read the abstract only from: Martin, K., Shilton, K. & Smith, J. Business and the Ethical Implications of Technology: Introduction to the Symposium. Journal of Business Ethics 160: 307–317. DOI:10.1007/s10551-019-04213-9",
          "This video provides a good overview of GDPR and how it affects businesses: IT Governance Ltd (2018) What is the GDPR? A summary of the EU GDPR: <a href='https://youtu.be/Assdm6fIHlE'> Youtube Video</a>",
        ],
      },
    },
    {
      title: "Unit 2",
      description: "Introduction to Computer Architecture and Functionality",
      outcomes: [
        "Appreciate the evolution of computer and computing technologies due to innovations",
        "Describe the critical functional issues of computer structure components",
        "Identify and demonstrate the basic characteristics, functions and features of each element of a computer system",
        "Demonstrate the theories and nature of data representation for computers",
      ],
      writing:  "../assets/artefacts/module1/Reflections-M1-U2.pdf",
      reading: {
        required: [
          "Read Section 0.2, Chapter 1, Chapter 2, Appendixes A and B of your core text book: Brookshear, J. and Brylow, D. (2018), Computer Science - An Overview. 13th Ed. Harlow: Pearson",
          "Smith, J.E. & Nair, R. (2005) Introduction to virtual machines.",
        ],
        optional: [
          "Balci, O. et al. (n.d.) Machine architecture: Circuits.",
          "Balci, O. et al. (n.d.) Machine architecture: Data storage.",
          "Balci, O. et al. (n.d.) Machine architecture: Gates.",
          "Balci, O. et al. (n.d.) Machine architecture: The central processing unit.",
        ],
      },

      activities: [
        {
          title: "Discussion Forum - Responses",
          ref: "pdf",
          href: "../assets/artefacts/module1/M1-Discussion_1_GDRP_Responses.pdf",
          type: "discussion"
        },
        {
          display: "date",
          month: "Feb",
          day: 6,
          title: "Seminar 1 - Introduction and Review of Computer Architecture"
        },
      ],
    },
    {
      title: "Unit 3",
      description: "Emerging Trends in Computer Science",
      outcomes: [
        "Appreciate the emerging trend of computing that led to the advancement of human computer interaction.",
        "Identify the fundamental technologies that are deployed to support the emerging computing technologies.",
        "Identify the risks and threats associated with emerging technology and suggest guidelines to mitigate those risks.",
      ],
      writing:  "../assets/artefacts/module1/Reflections-M1-U3.pdf",
      activities: [
        {
          title: "Discussion Post - Summary",
          description: "Review an IT organisation's Code of Conduct and reflect on <strong>areas of improvement </strong>, <strong> best practices</strong>, or <strong>incidents</strong>.",
          ref: "pdf",
          href: "../assets/artefacts/module1/M1-Discussion_1_GDPR_Summary.pdf",
          type: "discussion"
        },
        {
          title: "Explore AI tools developed by Google",
          description: "Investigate, review and try it out.",
        },
        {
          title: "Explore Google Translate",
          description: "Investigate, review and try it out.",
        },
        {
          title: "Coding Exercises",
          description: "Initial introductions as well as how to link GitHub account to Codio",
        },
      ],

      reading: {
        required: [
          "Read Section 4, 4.6, 9.6, 9.7, 10.6, 11.7, Chapter 11 of your core text book: Brookshear, J. and Brylow, D. (2018), Computer Science - An Overview. 13th Ed. Harlow: Pearson.",
        ],
        optional: [
          "El-Seoud, S & El-Sofany, H. (2017) Big Data and Cloud Computing: Trends and Challenges. International Journal of Interactive Mobile Technologies 11(34). DOI: 10.3991/ijim.v11i2.6561.",
          "Neves, P.; Schmerl, B.; Cámara, J. & Bernardino, J. (2016) 'Big Data in Cloud Computing: Features and Issues', In Proceedings of the International Conference on Internet of Things and Big Data - Volume 1: IoTBD 307-314. DOI: 10.5220/0005846303070314.",
          "Carsten M. (2017) Security and privacy in the internet of things. Journal of Cyber Policy 2(2): 155-184. DOI: 10.1080/23738871.2017.1366536.",
          "This article will talk how the Big Data can be used in different domains for forecasting: Hassani, H., Silva, E.S. (2015) Forecasting with Big Data: A Review. Ann. Data. Sci. 2: 5-19.",
          "This sets the concept of BYOC and BYOD: North Bridge (2013) Future of cloud computing survey reveals business driving cloud adoption in everything as a service era; IT investing heavily to catch up and support consumers graduating from BYOD to BYOC",
          "Sultan, H. & Khalique, A. (2017) Internet of Things: Future of Cloud Computing. International Journal of Advanced Research in Computer Science 8(2).",
          "Sherman, R. (2014) Strong AI strong artificial intelligence and consciousness. Social Psychology of Cyberspace.",
          "This video provides a simple overview of big data: Tedx Talks (2013) Big data small world: <a href='https://youtu.be/Zr02fMBfuRA'>Big Data, Small World: Kirk Borne at TeEDxGerogeMasonU</a>",
          "Watch this video to get an idea why big data is a matter of interest for organisations: Explaining Computers (2012) Explaining big data: <a href='https://youtu.be/7D1CQ_LOizA'>Explaining Big Data</a>",
        ],
      },
    },
    {
      title: "Unit 4",
      description: "Computing Infrastructure and Networks",
      outcomes: [
        "Differentiate between various networking approaches, namely, internet and intranet",
        "Identify various network topologies and appreciate the technologies and protocols that make these networks to work",
        "Critically review a topology selection for a network and review the cybersecurity threats",
      ],
      writing:  "../assets/artefacts/module1/Reflections-M1-U4.pdf",
      reading: {
        required: [
          "Read Chapter 4 of your core text book: Brookshear, J. and Brylow, D. (2018), Computer Science - An Overview. 13th Ed. Harlow: Pearson.",
        ],
        optional: [
          "Siddiqui, F., Zeadally, S & Salah, K. (2015) Gigabit Wireless Networking with IEEE 802.11ac: Technical Overview and Challenges. Journal of Networks 10(3). DOI: 10.4304/jnw.10.3.164-171.",
          "This article introduces to the threats and challenges of networks: CISCO (n.d.) What is network security.",
          "TED (n.d.) Avi Rubin: All your devices can be hacked.",
          "This is a case example of autonomous car and the article highlights the challenges of such technology: Lu, N., Cheng, N., Zhang, N., Shen, X. & Mark, J.W. (2014) Connected vehicles: Solutions and challenges. IEEE internet of things journal 1(4): 289-299.",
        ],
      },
      activities: [
        {
          title: "Website Investigation"
        },
        {
          title: "Linux Command Line Interface"
        },
        {
          display: "date",
          month: "Feb",
          day: 20,
          title: "Seminar 2 - Emerging Technologies and Networks",
        },
      ],
    },
    {
      title: "Unit 5",
      description:
        "Software as a Tool - Functionality and Development Methodologies",
      outcomes: [
        "Classify software and review the selection of software as a creative tool in order to solve a problem in your workplace.",
        "Apply different software development methodology to collaborate, design, develop and test software.",
        "Identify correct methodology for software validation and correctness.",
      ],
      writing: "../assets/artefacts/module1/Reflections-M1-U5.pdf",
      reading: {
        required: [
          "Read Section: 5.3, 10, 10.1, 10.6, 12.4 and Chapter 7 of your core text book: Brookshear, J. and Brylow, D. (2018), Computer Science - An Overview. 13th Ed. Harlow: Pearson.",
        ],
        optional: [
          "Wirth, N. (2008) A Brief History of Software Engineering. IEEE Annals of the History of Computing 30(3): 32-39. DOI:10.1109/MAHC.2008.33.",
          "Ambler, S. (2012) 2011 IT project success rates survey.",
          "This article introduces an important software development methodology adapted by many large and small organisations: Ambler, S. (2014) Agile modeling (AM) home page: effective practices for modeling and documentation.",
          "Asur, S. & Hufnagel, S. (1993)Taxonomy of rapid-prototyping methods and tools. Proceedings The Fourth International Workshop on Rapid System Prototyping, Research Triangle Park. Pp. 42-56. DOI: 10.1109/IWRSP.1993.263196.",
          "Hughey, D. (2009) The traditional waterfall approach.",
          "Lewallen, R. (2005). Software Development Life Cycle. Code Better.",
          "This article introduces the basics of SCRUM methodology: Scrum (2014) Scrum.org",
        ],
      },
      activities: [
        {
          title: "End of Module - Draft",
          ref: "pdf",
          href: "../assets/artefacts/module1/M1_U12_Report_Preparation_AI_DOD.pdf",
          type: "assignment"
        },
        {
          title: "End of Module - Draft (Feedback)",
          ref: "pdf",
          href: "../assets/artefacts/module1/M1_U12_Report_Preparation_Feedback.pdf",
          type: "assignment"
        },
        {
          display: "date",
          month: "Feb",
          day: 27,
          title: "Seminar 3 - Lab Exercises in Flode (Codio)",
        },
      ],
    },
    {
      title: "Unit 6",
      description: "System Software - Operating Systems",
      writing:  "../assets/artefacts/module1/Reflections-M1-U6.pdf",
      outcomes: [
        "Appreciate the functionality, features and tools of OS.",
        "Identify the select an operating system that is most suitable to accomplish a task.",
        "Demonstrate the data storage and data access supports OS can provide.",
      ],
      reading: {
        required: [
          "Read Chapter 3 of your core text book: Brookshear, J. and Brylow, D. (2018), Computer Science - An Overview. 13th Ed. Harlow: Pearson",
        ],
      },
      activities: [
        {
          title: "OS investigation"
        },
        {
          title: "Python Programming"
        }
      ],
    },
    {
      title: "Unit 7",
      description: "Data Abstraction",
      outcomes: [
        "Appreciate the importance of the concepts of data structure, their functionality and techniques.",
        "Apply and demonstrate the applications of data structure in computer programming.",
      ],
      writing:  "../assets/artefacts/module1/Reflections-M1-U7.pdf",
      reading: {
        required: [
          "Read Section 6.2, 6.3 and Chapter 8 of your core text book: Brookshear, J. and Brylow, D. (2018), Computer Science - An Overview. 13th Ed. Harlow: Pearson.",
        ],
        optional: [
          "FAQs.org (n.d.) Queues and priority queues.",
          "NIST (n.d.) Dictionary of algorithms and data structures.",
          "This website presents the fundamentals of data structure:",
          "Virginia Tech (n.d.) Graphs.",
          "Virginia Tech (n.d.) Multidimensional arrays.",
          "Virginia Tech (n.d.) Ordered list: The implementation view.",
          "Virginia Tech (n.d.) Queues: The abstract view.",
          "Virginia Tech (n.d.) Stacks: The abstract view.",
          "Virginia Tech (n.d.) Trees",
        ],
      },
      activities: [
        {
          title: "Compare and contrast data structures"
        },
        {
          title: "Python programming"
        },
        {
          display: "date",
          month: "Mar",
          day: 13,
          title: "Seminar 4 - Data Structures",
        },
      ],
    },
    {
      title: "Unit 8",
      description: "Introduction to Algorithms and Basic Programming Concepts",
      writing: "../assets/artefacts/module1/Reflections-M1-U8.pdf",
      outcomes: [
        "Apply the algorithm framework for describing and solving a problem.",
        "Demonstrate a step by step approach to solving a problem using pseudocode.",
        "Validate the output using different quality assurance matrices.",
      ],
      reading: {
        required: [
          "Read Chapters 5 and 12, Appendix D of your core text book: Brookshear, J. and Brylow, D. (2018), Computer Science - An Overview. 13th Ed. Harlow: Pearson.",
        ],
        optional: [
          "Acm (n.d) Collected Algorithms.",
          "Dionysis, Z. (n.d) A gentle introduction to algorithm complexity analysis.",
          "Ericson, J (2019) Algorithms.",
          "An example program that identifies multiples written in Java: Meyer, H.B. (n.d.) Eratosthenes’ sieve.",
          "Roughgarden, Tim. (n.d.) Design and analysis of algorithms.",
        ],
      },
      activities: [
        {
          title: "Python programming"
        },
        {
          title: "Assignment 1/3",
          type: "assignment",
          ref: "pdf",
          href: "../assets/artefacts/module1/M1_Assignment_1_P1_of_3.pdf"
        }
      ],
    },
    {
      title: "Unit 9",
      description: "Solving Problems using Python",
      writing:  "../assets/artefacts/module1/Reflections-M1-U9.pdf",
      outcomes: [
        "Write an algorithm.",
        "Investigate the quality parameters of an algorithm.",
      ],
      reading: {
        required: [
          "Read Chapter 6 and Appendix E of your core text book: Brookshear, J. and Brylow, D. (2018), Computer Science - An Overview. 13th Ed. Harlow: Pearson.",
        ],
        optional: [
          "Lynda.com (n.d.) Programming Languages Tutorials.",
          "Mogensen, T. (2010) Basics of compiler design.",
          "Virginia Tech (n.d.) Programming languages",
        ],
      },
      activities: [
        {
          display: "date",
          month: "Mar",
          day: 27,
          title: "Seminar 5 - Python Programming",
        },
      ],
    },
    {
      title: "Unit 10",
      description: "Data Representation using Database Concepts",
      writing:  "../assets/artefacts/module1/Reflections-M1-U10.pdf",
      outcomes: [
        "Apply database concepts and theories in the database design in terms of database integrity and data consistency.",
        "Create and manipulate data stored in a database by means of the structured query language, SQL.",
        "Review the security and maintenance methods of a database.",
      ],
      reading: {
        required: [
          "Read Chapter 9 of your core text book: Brookshear, J. and Brylow, D. (2018), Computer Science - An Overview. 13th Ed. Harlow: Pearson.",
          "Hoffman, J. (1997) Introduction to Structured Query Language.",
        ],
        optional: [
          "Adbc (n.d.) Animated database courseware.",
          "Ramakrishnan, R. & Gehrke, J. (2002) Security introduction to DB security access controls. Database management systems. 2nd ed.",
          "Stajano, F. A (n.d) Gentle introduction to relational and object oriented databases",
        ],
      },
      activities: [
        {
          title: "Introduction to MySQL"
        },
        {
          title: "Assignment 2/3",
          type: "assignment",
          ref: "pdf",
          href: "../assets/artefacts/module1/M1_Assignment_1_P2_of_3.pdf"
        }
      ],
    },
    {
      title: "Unit 11",
      description: "Advanced SQL",
      writing:  "../assets/artefacts/module1/Reflections-M1-U11.pdf",
      outcomes: [
        "Write complex queries to extract the results from a database using SQL.",
        "Apply aggregate, arithmetic, date and string functions in SQL for summarised reporting.",
        "Evaluate query results.",
      ],
      reading: {
        required: [
          "Hoffman, J. (1997) Introduction to Structured Query Language.",
        ],
      },
      activities: [
        {
          title: "Advanced SQL"
        },
        {
          display: "date",
          month: "Apr",
          day: 10,
          title: "Seminar 6 - Advanced SQL",
        },
        {
          title: "Assignment 3/3",
          type: "assignment",
          ref: "zip",
          filename: 'Module 1_Assignment 1 Part 3.zip',
          href: "../assets/artefacts/module1/M1_Assignment_1_P3_of_3_sql.zip"
        }
      ],
    },
    {
      title: "Unit 12",
      description: "Research Topics in Computer Science - Data Science, AI and Standards",
      writing:  "../assets/artefacts/module1/Reflections-M1-U12.pdf",
      outcomes: [
        "Explore the trends and research topics in the area of computer science.",
        "Identify and define a problem in the area of computer science.",
        "Propose a research question and then support the research question with adequate literature-based evidence.",
      ],
      reading: {
        required: [
          "Read Chapters 11 and 12.2 of your core text book: Brookshear, J. and Brylow, D. (2018), Computer Science - An Overview. 13th Ed. Harlow: Pearson.",
        ],
        optional: [
          "This is an example of expert system : Dreyfus, H. (2010) From Socrates to expert systems: The limits and dangers of calculative rationality. University of California, Berkeley, the Department of Philosophy.",
          "This is a tutorial on artificial intelligence: Jain A.K. et el.(n.d.) Artificial Neural Networks: A Tutorial.",
          "Khan, A., Baharudin, B., Lee, L.H. & Khan, K. (2010 A review of machine learning algorithms for text-documents classification. Journal of advances in information technology 1(1): 4-20.",
          "MIT: Linear Algebra",
          "MIT: Multivariate Calculus",
          "Sherman, R. (2014) Strong AI strong artificial intelligence and consciousness. Social Psychology of Cyberspace.",
          "Turing, A. (1950) Computing machinery and intelligence. Computing Machinery and Intelligence Mind 59: 433-460.",
          "This Guardian article reports the AI use in Google data centre: Guardian. Application of AI in Google Data Centre.",
          "Case studies on the success stories of AI and IoTs: Artificial Intelligence and Machine Learning Success stories [IoT Summit 2017]:",
        ],
      },
      activities: [
        {
            title: "End of module report",
            ref: "pdf",
            href: "../assets/artefacts/module1/M1_Assignment_1_EndOfModule_Report.pdf",
            type: "assignment"
        }
      ],
    },
  ],
};
