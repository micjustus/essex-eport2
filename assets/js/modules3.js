export const module = {
  id: 3,
  title: "Secure Software Development",
  outcomes: [
    "Identify and manage security risks as part of a software development project.",
    "Critically analyse development problems and determine appropriate methodologies, tools and techniques (including program design and development) to solve them.",
    "Design and develop/adapt computer programs and to produce a solution that meets the design brief and critically evaluate solutions that are produced.",
    "Systematically develop and implement the skills required to be effective member of a development team in a virtual professional environment, adopting real-life perspectives on team roles and organisation.",
  ],
  project: "../assets/artefacts/module3/M3-Team_Project_Evaluation.pdf",
  reflections: "../assets/artefacts/module3/M3-Reflections_Module.pdf",
  meetings:[
    {
      date: "16 Aug 2021",
      attendees: "Andrey Smirnov; Taylor Edgell; Michael Justus",
      minutes: "../assets/artefacts/module3/M3-Meetings_20210816.pdf"
    },
    {
      date: "18 Aug 2021",
      attendees: "Andrey Smirnov; Taylor Edgell; Michael Justus",
      minutes: "../assets/artefacts/module3/M3-Meetings_20210818.pdf"
    },
    {
      date: "24 Aug 2021",
      attendees: "Andrey Smirnov; Taylor Edgell; Michael Justus",
      minutes: "../assets/artefacts/module3/M3-Meetings_20210824.pdf"
    },
   
    {
      date: "3 Sep 2021",
      attendees: "Andrey Smirnov; Taylor Edgell; Michael Justus",
      minutes: "../assets/artefacts/module3/M3-Meetings_20210903.pdf"
    },

    {
      date: "10 Sep 2021",
      attendees: "Andrey Smirnov; Taylor Edgell; Michael Justus",
      minutes: "../assets/artefacts/module3/M3-Meetings_20210910.pdf"
    },

    {
      date: "14 Sep 2021",
      attendees: "Andrey Smirnov; Taylor Edgell; Michael Justus",
      minutes: "../assets/artefacts/module3/M3-Meetings_20210914.pdf"
    },

    {
      date: "17 Sep 2021",
      attendees: "Andrey Smirnov; Taylor Edgell; Michael Justus",
      minutes: "../assets/artefacts/module3/M3-Meetings_20210917.pdf"
    },

    {
      date: "20 Sep 2021",
      attendees: "Andrey Smirnov; Taylor Edgell; Michael Justus",
      minutes: "../assets/artefacts/module3/M3-Meetings_20210920.pdf"
    },

  ],
  units: [
    {
      title: "Unit 1",
      description: "Introduction to Secure Software Development",
      outcomes: [
        "Identify relevant academic literature which discusses the ways in which secure software may be developed using an agile process.",
        "Decompose an activity into a set of tasks which can be represented using a flow chart from the UML portfolio of modelling techniques.",
        "Describe the importance of creating a culture of risk awareness in an organisation, in addition to the creation of secure software.",
      ],
      writing: "../assets/artefacts/module3/M3-Reflections_U1.pdf",

      reading: {
        required: [
          "Core Text: Pillai, A.B. (2017) Software Architecture with Python. Birmingham, UK. Packt Publishing Ltd. Chapter 1., Chapter 6.",
          "Asghar, M. Z., Alam, K. A. & Javed, S. (2019) Software Design Patterns Recommendation : A Systematic Literature Review, 2019 International Conference on Frontiers of Information Technology.",
          "Royce, W. W. (1970) Managing the Development of Large Software Systems.",
          "OMG (2017) Unified Modelling Language, Version 2.5.1.",
          "Mitre (2017) Weaknesses in OWASP Top Ten.",
          "Pohl, C. & Hof, H-J. (2015) Secure Scrum: Development of Secure Software with Scrum, in Proc. of the 9th International Conference on Emerging Security Information, Systems and Technologies.",
          "ISO/IEC (2018) ISO/IEC Standard 27000 Section 3.",
        ],
        optional: [
          "Fowler, M. (2006) Code Smell.",
          "Mougouei, D., Sani, F. M., & Almasi, M. (2013) S-Scrum: a Secure Methodology for Agile Development of Web Service, Computer Science and Information Technology.",
          "Wichers, D. (2008) Breaking the Waterfall Mindset of the Security Industry. In: OWASP AppSec USA, New York.",
          "Manadhata, P. & Wing, J. M. (2004) Measuring a System's Attack Surface, Carnegie Mellon.",
          "Ofcom (2019) O2 Network Outage.",
          "IBM (2015) 10 Essential Security Practices from IBM.",
          "Open Group (2016) The SOA Source Book",
          "Casteren, W. Van. (2017) The Waterfall Model and the Agile Methdologies: A Comparison by Project Characteristics.",
        ],
      },
      activities: [
        {
          title: "Collaborative Discussion - Flowcharts",
          description: "Identify and diagram an OWASP failure",
          href: "../assets/artefacts/module3/M3-U1_Discussion_FlowChart.pdf",
          ref: "pdf"
        }
      ],
     
    },
    {
      title: "Unit 2",
      description: "UML Modelling to Support Secure System Planning",
      outcomes: [
        "Research the academic literature on software development which follows an agile process and prioritises security.",
        "Break down the steps involved in a process so that they may be represented as a flow chart.",
        "Reading areas of an ISO/IEC Standard on security and becoming familiar with the language and concepts.",
      ],
      writing: "../assets/artefacts/module3/M3-Reflections_U2.pdf",
      activities: [
        {
          title: "Collaborative Discussion - Responses",
          description: "Identify and diagram an OWASP failure",
          href: "../assets/artefacts/module3/M3-U1_Discussion_FlowChart_Responses.pdf",
          ref: "pdf"
        },

        {
          title: "Seminar 1 - Scrum Security Review (Question 1)",
          description: "Map development processes to Scrum process for secure software development",
          href: "../assets/artefacts/module3/M3-Seminars_1_Q1.pdf",
          ref: "pdf",
          display: "date",
          month: "Aug",
          day: 19,
          type: "seminar"
        },

        {
          title: "Seminar 1 - Scrum Security Review (Question 2)",
          description: "Write a short blog post about managing humans and cybersecurity.",
          href: "../assets/artefacts/module3/M3-Seminars_1_Q2.pdf",
          ref: "pdf",
          type: "seminar"
        },

      {
        title: "Team Project - Contract",
        description:
          "Develop an initial contract between team members to agree roles, responsibilites and method of operation.",
        href:  "../assets/artefacts/module3/Team_Contract_SSD_0.4.pdf",
        ref: "pdf",
        type: "assignment"
      }
      ],
      reading: {
        required: ["Dadzie, J. (2005) Understanding Software Patching, IEEE."],
        optional: [
          "Pillai, A.B. (2017) Software Architecture with Python. Birmingham, UK. Packt Publishing Ltd. Chapter 1, Chapter 6.",
          "Accenture security (2020) The Cost of Cybercrime, Ninth Annual Cost of Cybercrime Study.",
          "National Institute of Standards and Technology (2020) Cybersecurity Framework.",
          "Object Management Group (2020) Unified Architecture Framework (UAF) Domain Metamodel. Version 1.1.",
        ],
      },
    },
    {
      title: "Unit 3",
      description: "Programming Languages: History, Concepts & Design",
      outcomes: [
        "Describe some key milestones in the development of programming languages.",
        "Outline some of the key paradigms that define the different types of languages.",
        "Explain the key concepts that determine the operation of programming languages.",
        "Discuss key programming challenges and recommended best practices.",
        "Explain what design patterns are and when to use them.",
      ],
      writing: "../assets/artefacts/module3/M3-Reflections_U3.pdf",
      activities: [
        {
          title: "Collaborative Discussion - Summary",
          description: "Identify and diagram an OWASP failure.",
          href: "../assets/artefacts/module3/M3-U1_Discussion_Flowchart_Summary.pdf",
          ref: "pdf"
        },

        {
          title: "Team Discussion - Secure programming languages",
          description: "What makes a programming language secure? Can Python be considered 'secure'?",
          href: "../assets/artefacts/module3/M3-U3_SecureLanguage_Team.pdf",
          ref: "pdf"
        },

        {
          title: "Secure Programming Languages",
          description: "Own research incorporating discussions points from team members",
          href: "../assets/artefacts/module3/M3-U3_SecureLanguage.pdf",
          ref: "pdf"
        },
       
        {
          title: "Codio - Exploring Python tools and features",
          description: "Two parts to investigate buffer overflow and role of linters.",
          href: "../assets/artefacts/module3/M3-Codio_U3.pdf",
          ref: "pdf"
        },
      ],
      reading: {
        required: [
          "Pillai, A.B. (2017) Software Architecture with Python. Birmingham, UK. Packt Publishing Ltd. Chapter 2, 6, 7, 8",
          "Cifuentes, C. & Bierman, G. (2019) What is a Secure Programming Language? 3rd Summit on Advances in Programming Languages (SNAPL).136(3): 1 - 15.",
          "Aiello, J., Wheeler, S. & Koon, S. (2020) What Is Powershell? - Powershell Docs.microsoft.com.",
          "Copeland, B. (2017) The Church-Turing Thesis (Stanford Encyclopedia Of Philosophy/Winter 2017 Edition) Stanford.library.sydney.edu.au.",
          "VanRoy, P. (2009) Programming Paradigms: What Every Programmer Should Know.",
        ],
      },
    },
    {
      title: "Unit 4",
      description: "Exploring Programming Language Concepts",
      outcomes: [
        "Explain how and when to use regular expressions in solutions.",
        "Describe how and when to use recursion in solutions.",
        "Discuss the security implications of both approaches.",
      ],
      writing: "",
      activities: [
        {
          title: "Programming Language Concepts",
          description: "Explore the concepts of ReDOS and the role of regular expressions.",
          href: "../assets/artefacts/module3/M3-U4_ProgrammingConcepts.pdf",
          ref: "pdf",
        },

        {
          title: "Seminar 2 - Programming Language Concepts",
          description: "Investigte the concepts of recursion and regular expressions.",
          href: "../assets/artefacts/module3/M3-Seminars_2.pdf",
          ref: "pdf",
          display: "date",
          month: "Sep",
          day: 2,
          type: "seminar"
        },

        {
          items:[
            { title: "Towers of Hanoi script", href: "../assets/artefacts/module3/M3-Codio-U4-TowersOfHanoi.py"},
            { title: "UK Postal codes script", href: "../assets/artefacts/module3/M3-Codio-U4-PostalCodes.py"}
          ]
        }

      ],
      reading: {
        required: [
          "Larson, E. (2016) Generating Evil Test Strings for Regular Expressions. IEEE International Conference on Software Testing, Verification and Validation (ICST).",
          "Larson, E. (2018) Automatic Checking of Regular Expressions. 18th IEEE International Working Conference on Source Code Analysis and Manipulation (SCAM).",
          "Jaiswal, S. (2020) Python Regular Expression Tutorial.",
          "Weidman, A. (n.d.) Regular expression Denial of Service - ReDoS.",
          "Cormen, T. & Balkcom, D. (n.d.) Khan Academy: Towers of Hanoi.",
          "Idealpostcodes (2020) The UK Postcode Format.",
        ],
      },
    },
    {
      title: "Unit 5",
      description: "An Introduction to Testing",
      outcomes: [
        "Describe the key terms which are associated with testing software for security.",
        "Prepare a list of questions to ask when designing a test plan for secure software.",
        "Design software tests through understanding the range of ways which the security of software can be breached.",
      ],
      writing: "",
      reading: {
        required: [
          "Pillai, A. B (2017). Software Architecture with Python. Birmingham, UK. Packt Publishing Ltd. Chapter 3, 4, 10",
          "Ferrer, J., Francisco, C. & Enrique, A. (2012) Estimating Software Testing Complexity. Information and Software Technology.",
          "ISO/IEC/IEEE (2015) Software and Systems Engineering ??? Software Testing ??? Part 4: Test Techniques, ISO/IEC/IEEE 29119-4.",
          "Shepperd, M. (1988) A Critique of Cyclomatic Complexity as a Software Metric, Software Engineering Journal.",
        ],
        optional: [
          "Song, I. Guedea-Elizalde, F. & Karray, F (2007) CONCORD: A Control Framework for Distributed Real-Time Systems. IEEE Sensors Journal 7(7):1078 ??? 1090.",
        ],
      },
      activities: [
        {
          title: "Exploring the relevance of Cyclomatic Complexity",
          description: "Is Cyclomatic complexity relevant in the context of secure software development.",
          href: "../assets/artefacts/module3/M3-U5_CyclomaticComplexity.pdf",
          ref: "pdf",
        },
        {
          title: "Codio - Equivalence Testing",
          href: "../assets/artefacts/module3/M3-Codio_U5.pdf",
          description: "",
          ref: "pdf"
        },
        {
          items: [
            { title: "Equivalence testing script", href: "../assets/artefacts/module3/M3-Codio-U5-Testing.py" }
          ]
        }
      ],
    },
    {
      title: "Unit 6",
      description: "Using Linters to Support Python Testing",
      outcomes: [
        "Be familiar with using linters to support quality Python code development.",
        "Compare and contrast the outputs from linters to recognise their relevance and applicability in different development and testing scenarios.",
        "Develop Python code, which is free of error, consistent in its design, and considered to be high quality according to common Python standards.",
      ],
      writing: "",
      reading: {
        required: [
          "Firdaus, A., Ghani, I. & Jeong, S.  (2014) Secure Feature Driven Development (SFDD) Model for Secure Software Development, Procedia Social and Behavioral Sciences 129:546-553.",
          "NASA (2007) Final Report of the International Space Station Independent Safety Task Force",
          "Government of the Netherlands (n.d.) Fighting Cybercrime in the Netherlands",
          "The Computer Security Team (2020) Computer Security: Digital Stolen Goods of CERN?",
          "Information Commisioner's Office (ICO) (n.d) Guide to the General Data Protection Regulation (GDPR)",
        ],
        optional: [
          "Pillai, A.B. (2017) Software Architecture with Python. Birmingham, UK. Packt Publishing Ltd. Chapter 3, 4, 10",
          "Python.org (2020) PEP 0 -- Index of Python Enhancement Proposals (PEPs): Linters.",
          "Mannino, J. (n.d.) Security in a Microservice World, OWASP.",
        ],
      },
      activities: [
        {
          title: "Team Project - Design",
          description:
            "Develop a technical report as a team based on one of the selected domains.",
          href: "../assets/artefacts/module3/M3_Assignment_1.pdf",
          ref: "pdf",
          type: "assignment"
        },

        {
          title: "Seminar 3 - Using Linters",
          description: "Using <strong>pylint</strogn>, <strong>flake</strong> and <strong>mccabe</strong> linters to evaluate Python code.",
          href: "../assets/artefacts/module3/M3-Seminars_3.pdf",
          ref: "pdf",
          display: "date",
          month: "Sep",
          day: 16,
          type: "seminar"
        },

        {
          items: [
            { title: "Metric Test 2", href: "../assets/artefacts/module3/M3-Codio-U6-MetricTest_2.py"},
            { title: "Linter Test 2", href: "../assets/artefacts/module3/M3-Codio-U6-PylintTest_2.py"}
          ]
        }
      ],
    },

    {
      title: "Unit 7",
      description: "Introduction to Operating Systems",
      outcomes: [
        "Describe mitigations to make operating systems more secure.",
        "Explain some of the key risks and vulnerabilities associated with operating systems.",
        "Outline the differences between static and dynamic libraries and when to use each.",
      ],
      writing: "",
      reading: {
        required: [
          "Saltzer, J. & Schroeder, M. (1975) The Protection of Information in Computer Systems. Proceedings of the IEEE 63(9): 1278-1308.",
          "Szabo, G. (2018) Create your own interactive shell with cmd in Python.",
          "Praka, D. (2018) Write a shell in Python.",
        ],
        optional: [
          "Silberschatz, A., Galvin, P. & Gagne, G. (2018) Operating System Concepts. 10th ed. Hoboken, N.J: Wiley. Chapters 2-8, 16, 18 and 19",
          "Garfinkel, S., Weise, D. & Strassmann, S., (1994) The Unix-Haters Handbook. 1st ed. San Mateo, Ca.: IDG Books Worldwide.",
          "Corbato F. & Vyssotsky V. (1965) Introduction and Overview of the Multics System. Proceedings of the Joint Computer Conference, ACM 1:185??? 196.",
        ],
      },
      activities: [
        {
          title: "Codio - Develop a simple commandline shell",
          description: "Identify security vulnerabilities and improvements.",
          href: "../assets/artefacts/module3/M3-Codio_U7.pdf",
          ref: "pdf"
        },

        {
          items:[
            { title: "Custom commandline", href: "../assets/artefacts/module3/M3-Codio-U7-Commandline.py"}
          ]
        }
      ],
    },

    {
      title: "Unit 8",
      description: "Cryptography and its use in Operating Systems",
      outcomes: [
        "Describe some of the issues encountered with cryptographic libraries.",
        "Explain the pros and cons of using common cryptographic libraries.",
        "Demonstrate the use of cryptographic libraries in a simple application.",
      ],
      writing: "",
      reading: {
        required: [
          "Junestam, A. & Guigo, N. (2014) Open Crypto Audit Project Truecrypt Security Assessment.",
          "TutorialPoint (2020) Cryptography with Python Tutorial.",
        ],
        optional: [],
      },
      activities: [
        {
          title: "Collaborative Discussion - TrueCrypt",
          description: "Is TrueCrypt secure and can it be recommended?",
          href: "../assets/artefacts/module3/M3-U8_Blog_Post.pdf",
          ref: "pdf",
        },

        {
          title: "Seminar 4 - Cryptography",
          description: "Create Python program to encrypt and descrypt a text file.",
          href: "../assets/artefacts/module3/M3-Seminars_4.pdf",
          ref: "pdf",
          display: "date",
          month: "Sep",
          day: 30,
          type: "seminar"
        },

        {
          items: [
            { title: "Cryptography script", href: "../assets/artefacts/module3/M3-Codio-U8-Encryption.py"}
          ]
        }
      ],
    },

    {
      title: "Unit 9",
      description: "Developing an API for a Distributed Environment",
      outcomes: [
        "Create an API and use it to create and read records.",
        "Become familiar with the capabilities of Python???s flask library.",
        "Design an ontology which can be used in standardised service deployments.",
      ],
      writing: "",
      reading: {
        required: [
          "Pillai, A.B. (2017) Software Architecture with Python. Birmingham, UK. Packt Publishing Ltd. Chapter 5.",
          "Salah, T., Zemerly, M. J., et al. (2016) The Evolution of Distributed Systems towards Microservices Architectures, in Proc. of the 11th International Conference for Internet Technology and Secured Transactions.",
          "Winkfield, L., Hu, Y-H., Hoppa, & M. A. (2018) A Study of the Evolution of Secure Software Development Architectures, Journal of the Colloquium for Information System Security Education.",
        ],
        optional: [],
      },
      activities: [
        {
          title: "Collaborative Discussion - Responses",
          description: "Is TrueCrypt secure and can it be recommended?",
          href: "../assets/artefacts/module3/M3-U8_Discussion_TrueCrypt_Responses.pdf",
          ref: "pdf",
        },

        {
          title: "Codio Activity - Developing an API",
          description: "",
          href: "../assets/artefacts/module3/M3-Codio_U9.pdf",
          ref: "pdf"
        },

        {
          title: "Architecture Evolution",
          description: "Attempt to add a section to consider evolution of arhcitectures after microservices.",
          href: "../assets/artefacts/module3/M3-U9-ArchitectureEvolution.pdf",
          ref: "pdf"
        },

        {
          items: [
            { title: "API script", href: "../assets/artefacts/module3/M3-Codio-U9-API.py"}
          ]
        }
      ],
    },

    {
      title: "Unit 10",
      description: "From Distributed Computing to Microarchitectures",
      outcomes: [
        "Describe a variety of distributed systems, and the pattern in which they evolved.",
        "Discuss the security attacks that distributed systems, in particular, are vulnerable to.",
        "Understand the ways in which virtual systems need to be protected due to the specific nature of attacks on them.",
      ],
      writing: "",
      reading: {
        required: [
          "Arnaut, W., Oliveira, K. & Lima, F. (2010) OWL-SOA: A Service Oriented Architecture Ontology Useful during Development Time and Independent from Implementation Time, IEEE.",
        ],
        optional: [
          "Pillai, A.B. (2017) Software Architecture with Python. Birmingham, UK. Packt Publishing Ltd. Chapter 5.",
          "Open Group (2016) The SOA Source Book: Service-Oriented Architecture Ontology Version 2.0. Chapter 2: System and Element.",
        ],
      },
      activities: [
        {
          title: "Collaborative Discussion - Summary",
          description: "Is TrueCrypt secure and can it be recommended?",
          href: "../assets/artefacts/module3/M3-U8_Discussion_TrueCrypt_Summary.pdf",
          ref: "pdf",
        },

        {
          title: "What is an ontology",
          description: "Learn what is an ontology and how to create a basic one.",
          href: "../assets/artefacts/module3/M3-U10-Ontology.pdf",
          ref: "pdf"
        },
        {
          items:[
            {title: "Ontology (RDF file)", href: "../assets/artefacts/module3/Essex-Ontology-Protege.owl", lang: "xml"},
            {title: "Ontology (image)", href: "../assets/artefacts/module3/M3-U10-Ontology.png", type: "image"}
          ]
        },
      ],
    },

    {
      title: "Unit 11",
      description: "Future trends in Secure Software Development",
      outcomes: [
        "Give examples of fog computing, IoT and Cyber Physical System components and solutions.",
        "Describe some of the security issues with the above-mentioned systems.",
        "Recommend emerging technologies and solutions to investigate.",
      ],
      writing: "",
      reading: {
        required: [
          "DiBona, C. & Ockman, S. (1999) Open Sources. 1st ed. Sebastapol: O???Reilly Media, Inc.",
          "Fritzsch J., Bogner J., Zimmermann A. & Wagner S. (2019) From Monolith to Microservices: A Classification of Refactoring Approaches. In: Bruel JM., Mazzara M., Meyer B. (eds) Software Engineering Aspects of Continuous Development and New Paradigms of Software Production and Deployment. DEVOPS 2018. Lecture Notes in Computer Science, vol 11350. Springer.",
          "Roman, R. Lopez, J. & Mambo, M. (2016) Mobile Edge Computing, Fog et al.: A Survey and Analysis of Security Threats and Challenges. Future Generation Computer Systems 78(1): 680 - 698.",
        ],
        optional: [
          "Seshia, S., Hu, S., Li, W. & Zhu, Q.,(2017) Design Automation of Cyber-Physical Systems: Challenges, Advances, and Opportunities. IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems 36(9):1421-1434. DOI: 10.1109/TCAD.2016.2633961.",
          "Bonomi, F., Milito, R., Zhu, J. & Addepalli, S. (2012) Fog computing and its role in the internet of things. Proceedings of the first edition of the MCC workshop on Mobile cloud computing - MCC 12 1(1): 13-16.",
        ],
      },
      activities: [
        {
            title: "Debate - Microkernels vs Microservices",
            description: "Take a position for or against microkernel or monolithic architectures",
            href: "../assets/artefacts/module3/M3-U11_Debate_Microservices.pdf",
            ref: "pdf"
        },

        {
          title: "Team Project - Readme",
          description:
            "Readme document for team project developed from unit 6. ",
          href: "../assets/artefacts/module3/M3-Team_Project_Team4_P2_Readme.pdf",
          ref: "pdf",
          type: "assignment"
        },

        {
          title: "Team Project - Test Outputs",
          description:
            "Document detailing automated and manually testing for team project developed from unit 6. ",
          href: "../assets/artefacts/module3/M3-Team_Project_Team4_P2_TestingOutput.pdf",
          ref: "pdf",
          type: "assignment"
        },

        {
          title: "Team Project - Python implementation",
          description:
            "Python source code for team project developed from unit 6. ",
          href: "../assets/artefacts/module3/M3-Team_Project_Team4_P2_Implementation.zip",
          ref: "zip",
          filename: "Team4ProjectImplementation.zip",
          type: "assignment"
        },
      ],
    },

    {
      title: "Unit 12",
      description: "The Great Tanenbaum-Torvalds Debate Revisited",
      outcomes: [
        "Recommend a strategy around which methodology to adopt: monolithic or microservices.",
        "Provide evidence to support your recommendation.",
        "Explain how faceted data approaches work.",
      ],
      writing: "",
      reading: {
        required: [
          "Biggs, S. Lee, D. & Heiser, G. (2018) The Jury Is In: Monolithic OS Design Is Flawed: Microkernel-based Designs Improve Security. Proceedings of the 9th Asia-Pacific Workshop on Systems (APSys '18). ACM 16:1???7.",
          "Bucchiarone, A. Dragoni, N. Dustdar, S. Larsen, S.T. & Mazzara, M. (2018) From Monolithic to Microservices: An Experience Report from the Banking Domain. IEEE Software 35 (3):50-55.",
        ],
        optional: [
          "Schmitz, T., Rhodes, D., Austin, T.H., Knowles, K., Flanagan, C. (2016) Faceted Dynamic Information Flow via Control and Data Monads. In: Piessens F., Vigan?? L. (eds) Principles of Security and Trust. POST 2016. Lecture Notes in Computer Science, vol 9635. Springer, Berlin, Heidelberg.",
        ],
      },
      activities: [
        {
          title: "Recommendation: Microservices or Monolithic?",
          href: "../assets/artefacts/module3/M3-U12_MicroOrMono.pdf",
          ref: "pdf"
        },

        {
          title: "Team Project Collaboration",
          type: "assignment",
          href: "../assets/artefacts/module3/M3-Team_Project_Contributions.pdf",
          tooltip: "Selected conversations taken from Slack conversation history."
        }

      ],
    },
  ],

  snippets: {
    flask: 
    "<blockquote><h1>Python Flask </h1>" + 
    "<p>Flask is a micro web framework Python module that allows easy development of web applications.</p>" + 
    "</blockquote><span>Michael Justus (2021)</span>",

    owasp: 
    "<blockquote><h1>Open Web Application Security Project</h1>" + 
    "<p>Famously known for their Top 10 list of web application security risks. This is a great source for developers to consult when " + 
    "attempting to determine the vulnerability levels of their web applications</p>" + 
    "</blockquote><span>Michael Justus (2021)</span>",

    ontology: 
    "<blockquote><h1>Ontologies</h1>They are <strong>hierarchal</strong> specifications of <i>concepts</i> related to <strong>entities</strong> and their associated " + 
    "<strong>properties</strong>. Ontologies facilitate reuse and knowledge sharing without relyiance on their underlying technological or physical implementation. " + 
    "They are also catalogues of reusable information that can be applied to one or more concepts.</blockquote><span>Michael Justus (2021)</span>",

    cyclomatic: 
    "<blockquote><h1>Cyclomatic complexity</h1>The most widely referenced cyclomatic complexity metric is that devised by (?) McCabe which measures the <strong>complexity</strong> " + 
    "of a given program based on the number of <strong>edges</strong> and <strong>nodes</strong> within a given code path. " + 
    "The metric is defined as [(Edges) - (Nodes) + 2] with a recommended metric value being <strong>10</strong>. The McCabe metric is independent of source lines within a function and is not designed to measure software architecture complexity. " + 
    "</blockquote><span>Michael Justus (2021)</span>",

    cryptography_sw: 
    "<blockquote><h1>Cryptographic Software</h1>Not all software cryptographic tools and libraries are secure. It is imperative to always ensure that development teams " + 
    "utilise the latest most up-to-date versions of appropriate tools and libraries." + 
    "</blockquote><span>Michael Justus (2021)</span>",

    secureprogramming:
      "<blockquote><h1>Secure Programming</h1>Secure programming concerns reducing software vulnerabilities by ensuring: " + 
      "<ul><li>Data is protected from unintended access (buffer overflows, index out-of-bounds)</li> " + 
      "<li>Data is safe from unintended user modifications (authentication, permissions, GDPR)</li>" + 
      "<li>Data is trusted (cryptography)</li>" + 
      "</ul></blockquote><span>Michael Justus (2021)<span>",

    python: 
      "<blockquote><h1>Python programming: what was learned?</h1>" + 
      "<ul><li>Function overloads are not supported in Python. Code must therefore introduce alternately named functions.</li>" + 
      "<li>Observed some very strange behaviour accessing an array class variable through functions defined with the <strong>@staticmethod</strong> decorator.</li>" + 
      "<li><strong>Flask</strong> is an incredibly easy module to start developing REST APIs in Python.</li>" + 
      "<li>The code flexibility of Python is close to JavaScript in that object properties can be dynamically added.</li>" + 
      "<li>Indentation is a painful construct in Python: it is often times difficult to identify between SPACE or TAB characters.</li>" + 
      "<li>Python properties are decorated with the <strong>@property</strong> decorator.</li>" + 
      "<li>Generally, Python is easy to learn and use.</li>" + 
      "</ul></blockquote><span>Michael Justus (2021)</span>"
  }
};

module.renderAdditional = renderModule.bind(module);
module.renderContent = renderContent.bind(module);

function renderContent(){
  return `<section class="row left" style="background: linear-gradient(to right, #dae2f8, #d6a4a4);">
  <div class="card-style-1" >
      <div id="unit-content" class="unit-content">
          <unit-card-empty></unit-card-empty>
      </div>
  </div>
  </section>`;  
}

export function openSnippet(snippetName){
  var text = module[snippetName];
  if (!text){
    return;
  }

  openPopup({ content: text });
}

function renderModule(){
  var items = this.outcomes
  .map((val, idx) => {
    return `<li>${val}</li>`;
  })
  .join("");

  return `<section class="band-1" style="padding:3em 0">
    <div style="float:left;">
      <div class="row vertical">
        <ul class="topics semibold">
        <li class="snippet"><img src="../assets/images/python-logo.png" width=64 height=64 style="margin-left: 25%;" alt="Python logo" onclick="openPopup({ content: '${this.snippets?.python}' })"/></li>
        <li class="snippet" onclick='openPopup({ content: "${this.snippets?.cryptography_sw}" })'>Cryptography software</li>
        <li>Cryptography algorithms</li>
        <li class="snippet" onclick='openPopup({ content: "${this.snippets?.secureprogramming}" })'>Secure programming</li>
        <li class="snippet" onclick='openPopup({ content: "${this.snippets?.owasp}" })'>OWASP</li>
        <li>Team project</li>
        <li class="snippet" onclick='openPopup({ content: "${this.snippets?.cyclomatic}" })'>Cyclomatic complexity</li>
        <li>Architecture evolution</li>
        <li class="snippet" onclick='openPopup({ content: "${this.snippets?.flask}" })'>APIs (Flask)</li>
        <li class="snippet" onclick='openPopup({ content: "${this.snippets?.ontology}" })'>Ontologies</li>
        </ul>
      </div>
    </div>
            <div class="centered mw-80ch">
              <header class="text-center">
                <h2>${this.title}</h2>
              </header>
              <ul>${items}</ul>
            
          `;
}