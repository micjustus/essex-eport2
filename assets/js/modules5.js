export const module = {
    id: 5,
    title: "Software Engineering Project Management",
    outcomes: [
        "Identify and apply appropriate software engineering and project management methodologies, tools and techniques for the development of solutions to real-world problems.",
        "Explore the implications of computer and network architectures for system-level design and development, as appropriate for risk and quality management.",
        "Design, develop and evaluate management systems to produce solutions that handle constraints and uncertainty, contextualising BDD concepts and secure coding principles & practices in SDLC.",
        "Systematically develop and implement the skills required to be effective member of a development team in a virtual professional environment, adopting real-life perspectives on roles and team organisation."
    ],
    project: "",
    reflections: "",
    actionPlan: "",//"../assets/artefacts/module5/M5-Action_Plan.pdf",
    skillsMatrix: "",//"../assets/artefacts/module5/M5-Professional_Skills_Matrix.pdf",
    meetings:[
      {
        date: "13 Mar. 2022 (@2pm)",
        attendees: "Andrey Smirnov; Taylor Edgell; Michael Justus; Grace Clarke; Shan Swanlow",
        minutes: "../assets/artefacts/module5/M5-TeamMeetings_1_Minutes.pdf"
      },
      {
        date: "21 Mar. 2022 (@5pm)",
        attendees: "Andrey Smirnov; Taylor Edgell; Michael Justus; Grace Clarke; Shan Swanlow",
        minutes: "../assets/artefacts/module5/M5-TeamMeetings_2_Minutes.pdf"
      },
      {
        date: "26 Mar. 2022 (@3pm)",
        attendees: "Andrey Smirnov; Taylor Edgell; Michael Justus; Grace Clarke; Shan Swanlow",
        minutes: "../assets/artefacts/module5/M5-TeamMeetings_3_Minutes.pdf"
      },
      {
        date: "2 Apr. 2022 (@2pm)",
        attendees: "Andrey Smirnov; Taylor Edgell; Michael Justus; Grace Clarke; Shan Swanlow",
        minutes: "../assets/artefacts/module5/M5-TeamMeetings_5_Minutes.pdf"
      },
    ],
    units: [
      {
        title: "Unit 1",
        description: "Introduction to Software Engineering Project Management ",
        outcomes: [
            "Describe a number of large projects, and the reasons for failure.",
            "Explain the relationship between Project Management, TOGAF and the SDLC.",
            "Describe the differences between the development of the Software Engineering and Project Management disciplines."
        ],
        writing: "",//"../assets/artefacts/module5/M5-Reflection_U1.pdf",
        reading: {
          required: [
            "Stellman, A. & Greene, J. (2008) Applied software project management. 1st ed. Sebastopol, CA: O'Reilly. Chapters 1 - 6.",
            "Lehtinen, A., Mäntylä, V., Vanhanen, J., Itkonen, J. & Lassenius, C. (2014) Perceived causes of software project failures – An analysis of their relationships. Information and Software Technology 56(6): 623–643.",
            "Goatham, R. (2020) Why Projects Fai"
          ],
          optional: [
            "Brooks, P. (1975) The Mythical Man-Month - Essays in Software Engineering. Anniversary ed. Addison-Wesley. Chapters 1 - 5. Chapters 11-13."
          ],
        },
        activities: [
          {
            title: "Collaborative Discussion 1: Project Failures",
            href: "../assets/artefacts/module5/M5-Discussion_1_ProjectFailures.pdf",
            ref: "pdf",
            type: "discussion"
          },
          {
            title: "Team Project - Contract",
            href:  "../assets/artefacts/module5/M5-Team_Contract.pdf",
            ref: "pdf",
            type: "assignment",
            display: "team"
          }
        ],
       
      },
      {
        title: "Unit 2",
        description: "Study: Why Projects Fail and Gathering Requirements Exercise",
        outcomes: [
            "Suggest mitigations for common project failures.",
            "Carry out requirements gathering using Gherkin."
        ],
        writing: "",//"../assets/artefacts/module5/M5-Reflection_U2.pdf",
        activities: [
          {
            title: "Collaborative Discussion 1: Responses",
            href: "../assets/artefacts/module5/M5-Discussion_1_ProjectFailures_Responses.pdf",
            ref: "pdf",
            type: "discussion"
          },
          {
            title: "Seminar 1: Requirements Gathering",
            href: "../assets/artefacts/module5/M5-Seminar1_RequirementsGathering.pdf",
            ref: "pdf",
            display: "date",
            month: "Mar",
            day: 16,
            type: "seminar"
           },
        ],
        reading: {
          required: [
            "Behave (2020) Behaviour Driven Development: The Gherkin Language."
          ],
          optional: [
            "Andriole, J. (2017) The Death of Big Software. Communications of the ACM 60(12): 29-32."
          ],
        },
      },
  
      {
        title: "Unit 3",
        description: "Software Development Life Cycles",
        outcomes: [
            "Describe the activities that are carried out by a Project Manager at each stage of the SDLC. ",
            "Collect the requirements of a software engineering project using the Volere template.",
            "Define a behaviour-driven development scenario."
        ],
        writing: "",//"../assets/artefacts/module5/M5-Reflection_U3.pdf",
        activities: [
          {
            title: "Collaborative Discussion 1 - Summary",
            href: "../assets/artefacts/module5/M5-Discussion_1_ProjectFailures_Summary.pdf",
            ref: "pdf",
            type: "discussion"
          },
          {
            title: "e-Portfolio Activity",
            ref: "pdf",
            href: "../assets/artefacts/module5/M5-Activity_1_DataStructures.pdf"
          },
        ],
        reading: {
          required: [
            "Saravanan, T., Jha, S., Sabharwal, G. & Narayan, S. (2020) Comparative Analysis of Software Life Cycle Models. 2nd International Conference on Advances in Computing, Communication Control and Networking. 906-909. ",
            "Mohammed, M., Niazi, M., Alshayeb, M. & Mahmood, S. (2017) Exploring software security approaches in software development lifecycle: A systematic mapping study. Computer Standards & Interfaces 50: 107-115. ",
            "Karim, A., Ammar, A. & Aziz, R. (2017) Ethical Software: Integrating Code of Ethics into Software Development Life Cycle. International Conference on Computer and Applications 290-298. ",
            "Ramasubbu, N. & Kemerer, C. (2018) Integrating Technical Debt Management and Software Quality Management Processes: A Framework and Field Tests. IEEE/ACM 40th International Conference on Software Engineering (ICSE). 883-883.",
            "Wyngaard, V., Pretorius, C., & Pretorius, L. (2012) Theory of the triple constraint — A conceptual review. IEEE International Conference on Industrial Engineering and Engineering Management. 1991-1997. ",
            "Dicheva, D. & Hodge, A. (2018) Active Learning through Game Play in a Data Structures Course. In the Proceedings of the 49th ACM Technical Symposium on Computer Science Education. 834-839. ",
            "Robertson, J. & Robertson, S. (n.d.) Volere Requirements Specification Template. 20th edition",
            "Singh, K. (2020) Behaviour-Driven Development (BDD) Helps in Optimizing the Value of Work Done by the Scrum Team. ",
            "Agile Alliance (n.d.) Three Amigos. ",
            "Dinwiddie, G. (2009) If You Don't Automate Acceptance Tests?. Tools and Techniques, Working Software.",
            "Dinwiddie, G. (2011) Three Amigos: All for One and One for All.",
            "Wambler, S. (n.d.) Introduction to Test Driven Development (TDD)",
            "Jeffries, R. (2011) What is Extreme Programming? "
          ],
          optional:[
            
          ]
        },
      },
  
      {
        title: "Unit 4",
        description: "Python Data Structures",
        outcomes: [
            "Identify the most appropriate data structure to retain different attributes of data.",
            "Use Python’s built-in capabilities to practically retain data electronically."
        ],
        writing: "",//"../assets/artefacts/module5/M5-Reflection_U4.pdf"
        activities: [
          {
            title: "Seminar 2: Requirements Identification",
            href: "../assets/artefacts/module5/M5-Seminar2_RequirementsIdentification.pdf",
            ref: "pdf",
            display: "date",
            month: "Mar",
            day: 30,
            type: "seminar"
           },
        ],
        reading: {
          required: [
            "Mokoena, T. S., Pretorius,  J. H. C., and Van Wyngaard, C. J. (2013) Triple constraint considerations in the management of construction projects. IEEE International Conference on Industrial Engineering and Engineering Management, 813-817.",
            "Abeykoon, V. et al. (2020) Data Engineering for HPC with Python. IEEE/ACM 9th Workshop on Python for High-Performance and Scientific Computing 13-21. ",
            "OpenDSA (n.d.) Data Structures and Algorithms. Open DSA. ",
            "Ravindra, K. (2019) Selecting a Right Data Structure 1. ",
            "Ravindra, K. (2019) Selecting a Right Data Structure 2. ",
            "IEEE Spectrum (n.d.) Homepage. ",
            "Volere (n.d.) Requirements Specification Template. "
          ],
          optional: [
            
          ],
        },
      },
  
      {
        title: "Unit 5",
        description: "User Experience",
        outcomes: [
            "Write a project plan, through which maximum efforts are being made to ensure a high-quality User Experience. ",
            "Define a strategy by which the User Experience can be measured and managed. ",
            "Recognise how to implement a Test-driven Development approach in Python."
        ],
        writing: "",//"../assets/artefacts/module5/M5-Reflection_U5.pdf",
        reading: {
          required: [
            "Lopes, A., Valentim, N., Moraes, B., Zilse, R. & Conte, T. (2018) Applying User-centered Techniques to Analyse and Design a Mobile Application. Journal of Software Engineering Research and Development 6: 5. DOI: https://doi.org/ 10.1186/s40411-018-0049-1",
            "Minge, M. & Thuring, M. (2018) Hedonic and Pragmatic Effects at Early Stages of User Experience. International Journal of Human-Computer Studies 109: 13-25. ",
            "International Organisation for Standardisation (2018) Ergonomics of Human-system Interaction - Part 11: Usability: Definitions and Concepts. ISO 9241-11:2018. ",
            "Gardler, R. & Hanganu, G. (2013) Governance Models. OSS Watch."
          ],
          optional: [
            "Matthews, T, Judge, T. & Whittaker, S. (2012) How do designers and user experience professionals actually perceive and use personas? In Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (CHI '12). Association for Computing Machinery, New York, NY, USA. 1219–1228. ",
            "Lai-Chong Law, R. (2011) The measurability and predictability of user experience. In Proceedings of the 3rd ACM SIGCHI symposium on Engineering interactive computing systems (EICS '11). Association for Computing Machinery, New York, NY, USA. 1–10.",
            "Shastri, Y, Hoda, R. & Amor, R. (2021) The role of the project manager in agile software development projects. Journal of Systems and Software 173. "
          ],
        },
        activities: [
        
        ],
      },
  
      {
        title: "Unit 6",
        description: "pytest and Test-Driven Development",
        outcomes: [
            "Achieve an application development through using test-driven development. ",
            "Appreciate the roles to be played when working within User Experience research.",
            "Contextualise a reaction to a software development project on the basis of the emotions of the stakeholders."
        ],
        writing: "",//"../assets/artefacts/module5/M5-Reflection_U6.pdf",
        reading: {
          required: [
            "Krekel, H. et al. (n.d.) Pytest: helps you write better programs. Pytest. ",
            "Giacomelli, J. (2020) Modern Test-driven Development in Python. "
          ],
          optional: [
            "Hillard, D. (n.d.) Effective Python Testing With Pytest.",
            "Mahlke, S. (2005) Understanding users' experience of interaction. In Proceedings of the 2005 annual conference on European association of cognitive ergonomics. 251–254."
          ],
        },
        activities: [
                   
        ],
      },
  
      {
        title: "Unit 7",
        description: "Estimating, Planning and Risk",
        outcomes: [
            "Select and utilise an appropriate tool for planning.",
            "Select and utilise an appropriate tool for estimating.",
            "Select and utilise an appropriate tool for risk assessment."
        ],
        writing: "",//"../assets/artefacts/module5/M5-Reflection_U7.pdf",
        reading: {
          required: [
            "Brooks, P. (1975) The Mythical Man-Month - Essays in Software Engineering. Anniversary ed. Addison-Wesley. Chapters 1-5.",
            "Stellman, A. & Greene, J. (2008) Applied software project management. 1st ed. Sebastopol, CA: O'Reilly. Chapter 2. Chapter 3.",
            "Jorgensen, M. and Shepperd, M. (2007). A Systematic Review of Software Development Cost Estimation Studies. IEEE Transactions on Software Engineering 33(1):33–53.",
            "Mäkitalo, N., Taivalsaari, A., Kiviluoto, A., Mikkonen, T. and Capilla, R. (2020). On opportunistic software reuse. Computing 102(11). 2385–2408."
          ],
          optional: [
            "Campbell, T. (2016) Practical Information Security Management. 1st ed. APRESS. Chapter 1. Chapter 2.",
            "Hubbard, D.W. (2009) The Failure of Risk Management: Why It's Broken and How to Fix It. ",
            "Van der Linden, J., Amadieu, F., Vayre, E. & Van de Leemput, C. (2019) User Experience and Social Influence: A New Perspective for UX Theory. In Marcus, A. & Wang, W. (eds) Design, User Experience, and Usability. Design Philosophy and Theory. HCII 2019. Lecture Notes in Computer Science. 11583. Springer: Cham, India"
          ],
        },
        activities: [
          
        ],
      },
  
      {
        title: "Unit 8",
        description: "HRisk Assessment and Estimating Tools",
        outcomes: [
            "Select an appropriate tool for project estimation based on a number of common factors.",
            "Utilise the tool to create a project estimate.",
            "Evaluate the usefulness of the tool in estimating.",
            "Discuss risk evaluation and mitigation approaches."
        ],
        writing: "",//"../assets/artefacts/module5/M5-Reflection_U8.pdf",
        reading: {
          required: [
            "‌Verner, M., Brereton, P., Kitchenham, A., Turner, M. & Niazi, M. (2014) Risks and risk mitigation in global software development: A tertiary study. Information and Software Technology 56(1):54–78.",
            "Anton, G. & Nucu, A. (2020). Enterprise Risk Management: A Literature Review and Agenda for Future Research. Journal of Risk and Financial Management 13(11): 281."
          ],
          optional: [
          ],
        },
        activities: [
          
        ],
      },
  
      {
        title: "Unit 9",
        description: "Quality Management Strategy",
        outcomes: [
            "Write a set of non-functional requirements by which a software development may be tested to demonstrate that quality has been achieved.",
            "Appreciate the ways in which technical debt may be accrued through ineffective software quality management."
        ],
        writing: "",//"../assets/artefacts/module5/M5-Reflection_U9.pdf",
        reading: {
          required: [
            "McCall, A., Richards, K. & Walters, F. (1977) Factors in Software Quality Concept and Definitions of Software Quality. RADC-TR-77. 369(1).",
            "Heitmeyer, C., Kirby, J. & Labaw, B. (1997) Tools for formal specification, verification, and validation of requirements. Proceedings of COMPASS '97: 12th Annual Conference on Computer Assurance. 35-47. DOI: https://doi.org/10.1109/CMPASS.1997.613206.",
            "Fitzpatrick, R. (1996) Software Quality: Definitions and Strategic Issues. Dublin Institute of Technology, School of Computing. ",
            "Mertz, J. (2019) Writing Clean and Pythonic Code. Jet Propulsion Laboratory California Institute of Technology."
          ],
          optional: [
            "Altextsoft. (2017) Striking a Balance between Manual and Automated Testing: When Two is Better than One.",
            "Féris, M. A. A., Zwikael, O., Gregor, S. (2017) QPLAN: Decision support for evaluating planning quality in software development projects. Decision Support Systems 96: 92-102.",
            "K. Ghane, K. (2017) Quantitative planning and risk management of Agile Software Development. IEEE Technology & Engineering Management Conference (TEMSCON). 109-112."
          ],
        },
        activities: [
          
        ],
      },
  
      {
        title: "Unit 10",
        description: "Software Quality Monitoring in Python",
        outcomes: [
            "Use Python linters to implement quality code.",
            "Describe how the concept of software quality has evolved over time.",
            "Make suggestions on techniques to recover a software engineering project which has been considered to have failed. "
        ],
        writing: "",//"../assets/artefacts/module5/M5-Reflection_U10.pdf",
        reading: {
          required: [
            "McCall, J. A., Richards, P. K., & Walters, G. F. (1977) Factors in Software Quality, Concept and Definitions of Software Quality. General Electric Company. ",
            "Klotins, E., Unterkalmsteiner, M. & Gorschek, T. (2019) Software engineering in start-up companies: An analysis of 88 experience reports. Empir Software Eng 24: 68–102. ",
            "Sarker, K. U., Deraman, B. & R. Hasan (2018) Descriptive Logic for Software Engineering Ontology: Aspect Software Quality Control. 4th International Conference on Computer and Information Science 1-5.",
            "Winters, T., Manshreck, T. & Wright, H. (2020) Software Engineering at Google, Lessons Learned from Programming over Time. O'Reilly Media, Inc. Chapter 1. Chapter 8."
          ],
          optional: [
            "Gabriel Farah, Juan Sebastian Tejada, and Dario Correal. 201  OpenHub: a scalable architecture for the analysis of software quality attributes.  In Proceedings of the 11th Working Conference on Mining Software Repositories (MSR 2014). Association for Computing Machinery, New York, NY, USA. 420–423. ",
            "Ramasubbu, N. & Kemerer, C. (2018) Integrating Technical Debt Management and Software Quality Management Processes: A Framework and Field Tests. IEEE/ACM 40th International Conference on Software Engineering (ICSE) 2018. 883-883",
            "Coelho, J. & Tulio Valente, M. (2017) Why modern open source projects fail. In Proceedings of the 2017 11th Joint Meeting on Foundations of Software Engineering (ESEC/FSE 2017). Association for Computing Machinery, New York, NY, USA. 186–196. "
          ]
        },
        activities: [
          {
          }
        ],
      },
  
      {
        title: "Unit 11",
        description: "Software Engineering Project Management: Future Trends",
        outcomes: [
          "Present a case that promotes one of the future trends as the main factor that will drive the future direction of SEPM."
        ],
        writing: "",//"../assets/artefacts/module5/M5-Reflection_U11.pdf",
        reading: {
          required: [
            "Jaafari, A. (2003) Project Management in the Age of Complexity and Change. Project Management Journal 34(4): 47–57.",
            "Cifuentes, C. & Bierman, G. (2019) What is a Secure Programming Language? SNAPL 3(1):1-15.",
            "Forsgren, N., Storey, M., Maddila, C., Zimmermann,T., Houck,B. & Butler, J. (2021) The SPACE of Developer Productivity - ACM Queue.",
            "Yi, S., Li, C. & Li, Q. (2015) A Survey of Fog Computing. Proceedings of the 2015 Workshop on Mobile Big Data.",
            "Porru, S., Pinna, A., Marchesi, M. & Tonelli, R. (2017) Blockchain-Oriented Software Engineering: Challenges and New Directions. IEEE/ACM 39th International Conference on Software Engineering Companion ICSE-C 169-171."
          ],
          optional: [
          ],
        },
        activities: [
         
        ],
      },
  
      {
        title: "Unit 12",
        description: "The Case for the Future Direction of Software Engineering Project Management",
        outcomes: [
          "Explain why the selected trend is the main driver for future developments"
        ],
        writing: "",//"../assets/artefacts/module5/M5-Reflection_U12.pdf",
        reading: {
          required: [
            "Mäkitalo, N., Taivalsaari, A., Kiviluoto, A., Mikkonen, T. & Capilla, R. (2020) On opportunistic software reuse. Computing 102(11): 2385–2408.",
            "Dang, Y., Lin, Q. & Huang, P. (2019) AIOps: Real-World Challenges and Research Innovations. 2019 IEEE/ACM 41st International Conference on Software Engineering: Companion Proceedings (ICSE-Companion). 4-5.",
            "Van der Aalst, W., Bichler, M. & Heinzl, A. (2018) Robotic Process Automation. Business & Information Systems Engineering 60: 269–272.",
            "Cabot, J. (2020) Positioning of the low-code movement within the field of model-driven engineering. Proceedings of the 23rd ACM/IEEE International Conference on Model Driven Engineering Languages and Systems: Companion Proceedings 76: 1-3.",
            "Ziegler, B., Sarvestani, S. & Hurson, A. (2019) Facilitating Failure Analysis with Software Instrumentation. IEEE 19th International Symposium on High Assurance Systems Engineering HASE 139-145."
          ],
          optional: [
          ],
        },
        activities: [
        ],
      },
    ],
  };
  