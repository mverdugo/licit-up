import Mock from "./mock";

const photo = require("../assets/placeholders/photo.jpg");
const logotype = require("../assets/placeholders/logotype.png");
const icon = require("../assets/placeholders/icon.svg");

const database = {
  categories: [
    {
      id: "0",
      title: "Product",
    },
    {
      id: "1",
      title: "Project",
    },
    {
      id: "2",
      title: "Review",
    },
    {
      id: "3",
      title: "Article",
    },
  ],
  choose: {
    list: [
      {
        icon: icon,
        text:
          "Phosfluorescently re-engineer frictionless metrics via premier niches. Seamlessly cultivate high-quality niches whereas empowered processes",
      },
      {
        icon: icon,
        text:
          "Seamlessly grow enabled scenarios without viral channels. Appropriately actualize stand-alone benefits and viral imperatives",
      },
      {
        icon: icon,
        text:
          "Monotonectally benchmark robust leadership skills before high standards in vortals. Collaboratively productivate business.",
      },
    ],
  },
  facts: [
    {
      text:
        "Globally leverage existing error-free models and B2B products. Professionally productize interdependent.",
      title: "Believe in your business skills but never stop improving",
    },
    {
      text:
        "Globally leverage existing error-free models and B2B products. Professionally productize interdependent.",
      title:
        "Efficiently impact focused e-services vis-a-vis client-focused outsourcing",
    },
    {
      text:
        "Globally leverage existing error-free models and B2B products. Professionally productize interdependent.",
      title:
        "Enthusiastically supply client-centered alignments after prospective",
    },
    {
      text:
        "Globally leverage existing error-free models and B2B products. Professionally productize interdependent.",
      title:
        "Professionally disintermediate client-focused intellectual capital ",
    },
    {
      text:
        "Globally leverage existing error-free models and B2B products. Professionally productize interdependent.",
      title: "Compellingly matrix global products before 2.0 technologies",
    },
  ],
  facts2: [
    {
      icon: icon,
      lead: "Projects done",
      text:
        "Rapidiously foster goal-oriented supply chains via error-free mindshare integrate flexible.",
      title: 417,
    },
    {
      icon: icon,
      lead: "Positive feedback",
      text:
        "Rapidiously foster goal-oriented supply chains via error-free mindshare integrate flexible.",
      title: "87%",
    },
    {
      icon: icon,
      lead: "Hours worked",
      text:
        "Rapidiously foster goal-oriented supply chains via error-free mindshare integrate flexible.",
      title: "1.8k",
    },
  ],
  fast_links: [
    {
      title: "Homepage",
      url: "/home",
    },
    {
      title: "About company",
      url: "/about-us",
    },
    {
      title: "Our services",
      url: "/services",
    },
    {
      title: "Become a partner",
      url: "/blog/post_3",
    },
    {
      title: "Contact us",
      url: "/contacts",
    },
  ],
  features: [
    {
      icon: icon,
      id: "post_0",
      text:
        "Globally leverage existing error-free models and B2B products. Professionally productize interdependent value without bricks-and-clicks niches. ",
      title: "How to make your product the ferrari of business",
    },
    {
      icon: icon,
      id: "post_1",
      text:
        "Globally leverage existing error-free models and B2B products. Professionally productize interdependent value without bricks-and-clicks niches. Globally leverage existing error-free models",
      title: "Believe in your business skills but never stop improving",
    },
    {
      icon: icon,
      id: "post_2",
      text:
        "Globally leverage existing error-free models and B2B products. Professionally productize interdependent",
      title: "Create a business your parents would be proud of",
    },
  ],
  features2: [
    {
      icon: "las la-archive",
      text:
        "Globally leverage existing error-free models and B2B products. Professionally productize interdependent value without bricks-and-clicks niches.",
      title: "#1 Solidity",
    },
    {
      icon: "las la-business-time",
      text:
        "Continually synthesize impactful web services after wireless users. Efficiently deliver excellent users through world-class core competencies. Efficiently enhance ubiquitous outsourcing.",
      title: "#2 Assurance",
    },
    {
      icon: "las la-file-invoice-dollar",
      text:
        "Synergistically streamline market-driven scenarios before synergistic alignments. Efficiently engage wireless e-services for cross-platform quality vectors. ",
      title: "#3 Liability",
    },
  ],
  header_bgs: {
    about: photo,
    about_video_poster: photo,
    blog: photo,
    contacts: photo,
    contacts_w: photo,
    portfolio: photo,
    services: photo,
    team: photo,
    team_w: photo,
    facts: photo,
    subscribe: photo,
    list: photo,
  },
  menu: [
    {
      children: [
        {
          name: "Slider Header",
          url: "/",
        },
        {
          name: "Paralax Image",
          url: "/home-paralax",
        },
        {
          name: "Video Background",
          url: "/home-video",
        },
      ],
      name: "Home",
      url: "/",
    },
    {
      name: "About us",
      url: "/about-us",
    },
    {
      name: "Services",
      url: "/services",
    },
    {
      name: "Portfolio",
      url: "/portfolio",
    },
    {
      children: [
        {
          name: "Grid Left Sidebar",
          url: "/blog-grid-left-sidebar",
        },
        {
          name: "List Left Sidebar",
          url: "/blog-list-left-sidebar",
        },
        {
          name: "Grid Right Sidebar",
          url: "/blog-grid-right-sidebar",
        },
        {
          name: "List Right Sidebar",
          url: "/blog-list-right-sidebar",
        },
        {
          name: "Grid No Sidebar",
          url: "blog-grid-without-sidebar",
        },
      ],
      name: "Blog",
      url: "/blog-grid-left-sidebar",
    },
    {
      name: "Contacts",
      url: "/contacts",
    },
  ],
  partners: [logotype, logotype, logotype, logotype, logotype, logotype],
  portfolio: [
    {
      cats: "contracting management construction",
      clientid: "0",
      feedback:
        "Rapidiously transform end-to-end strategic theme areas through functional information. Enthusiastically engage pandemic systems rather than installed base manufactured products. Quickly promote market positioning bandwidth before transparent sources.",
      full:
        "Dramatically provide access to customer directed platforms before professional portals. Objectively foster revolutionary human capital for error-free materials. Quickly envisioneer prospective alignments and distributed best practices. Quickly empower ethical users with 24/7 experiences. Interactively myocardinate go forward alignments whereas high standards in data.<br> Synergistically benchmark clicks-and-mortar collaboration and idea-sharing before stand-alone products. Rapidiously simplify inexpensive process improvements via go forward value. Collaboratively e-enable bricks-and-clicks markets without web-enabled meta-services. Dramatically re-engineer state of the art e-business after cooperative internal or organic sources. Energistically iterate corporate outsourcing for visionary results.",
      id: 0,
      img: photo,
      lead: "Construction",
      memberid: 0,
      stats: [
        {
          icon: "las la-users-cog",
          text: "Peoples at project",
          title: "17",
        },
        {
          icon: "las la-calendar-alt",
          text: "Days to completion",
          title: "141",
        },
        {
          icon: "las la-coffee",
          text: "Cups of coffee",
          title: "480",
        },
        {
          icon: "las la-comments",
          text: "Positive feedbacks",
          title: "700+",
        },
      ],
      text:
        "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "Modern materials ecology safety",
    },
    {
      cats: "construction management contracting",
      clientid: "1",
      feedback:
        "Compellingly content architect backward-compatible models and quality communities. Professionally drive wireless benefits whereas orthogonal internal sources. Completely negotiate an expanded array of metrics and extensible interfaces.",
      full:
        "Phosfluorescently reconceptualize exceptional total linkage without holistic e-tailers. Objectively utilize functional e-tailers rather than economically sound infomediaries. Uniquely expedite user friendly communities and 24/365 leadership. Objectively enhance plug-and-play relationships vis-a-vis dynamic outside the box thinking.<br>Energistically cultivate reliable data without standardized mindshare. Holisticly incubate progressive process improvements with just in time niche markets. Collaboratively brand interactive quality vectors after virtual expertise. Globally harness progressive action items whereas revolutionary collaboration and idea-sharing. Quickly facilitate real-time data without client-focused communities.",
      id: 1,
      img: photo,
      lead: "Manufacture",
      memberid: 1,
      stats: [
        {
          icon: "las la-users-cog",
          text: "Peoples at project",
          title: "17",
        },
        {
          icon: "las la-calendar-alt",
          text: "Days to completion",
          title: "141",
        },
        {
          icon: "las la-coffee",
          text: "Cups of coffee",
          title: "480",
        },
        {
          icon: "las la-comments",
          text: "Positive feedbacks",
          title: "700+",
        },
      ],
      text:
        "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "Architecture design in a wood village",
    },
    {
      cats: "contracting construction",
      clientid: "2",
      feedback:
        'Rapidiously syndicate professional e-services without wireless "outside the box" thinking. Distinctively seize proactive leadership via B2B alignments. Progressively myocardinate long-term high-impact manufactured products.',
      full:
        "Rapidiously leverage other's inexpensive leadership whereas cross-media outside the box thinking. Competently e-enable global interfaces after interdependent outside the box thinking. Competently brand timely expertise rather than inexpensive internal or organic sources. Continually scale high-quality niches before high-payoff resources. Professionally drive turnkey infomediaries for high standards in initiatives.<br> Enthusiastically facilitate front-end convergence with client-centered opportunities. Dynamically evolve compelling applications rather than pandemic partnerships. Uniquely cultivate goal-oriented information without cross-platform channels. Energistically customize B2B sources via distinctive leadership. Professionally initiate client-centered metrics without client-focused interfaces.",
      id: 2,
      img: photo,
      lead: "Engeneering",
      memberid: 2,
      stats: [
        {
          icon: "las la-users-cog",
          text: "Peoples at project",
          title: "17",
        },
        {
          icon: "las la-calendar-alt",
          text: "Days to completion",
          title: "141",
        },
        {
          icon: "las la-coffee",
          text: "Cups of coffee",
          title: "480",
        },
        {
          icon: "las la-comments",
          text: "Positive feedbacks",
          title: "700+",
        },
      ],
      text:
        "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "Effective house system for country side",
    },
    {
      cats: "management contracting",
      clientid: "3",
      feedback:
        'Rapidiously syndicate professional e-services without wireless "outside the box" thinking. Distinctively seize proactive leadership via B2B alignments. Progressively myocardinate long-term high-impact manufactured products.',
      full:
        "Dramatically provide access to customer directed platforms before professional portals. Objectively foster revolutionary human capital for error-free materials. Quickly envisioneer prospective alignments and distributed best practices. Quickly empower ethical users with 24/7 experiences. Interactively myocardinate go forward alignments whereas high standards in data.<br> Synergistically benchmark clicks-and-mortar collaboration and idea-sharing before stand-alone products. Rapidiously simplify inexpensive process improvements via go forward value. Collaboratively e-enable bricks-and-clicks markets without web-enabled meta-services. Dramatically re-engineer state of the art e-business after cooperative internal or organic sources. Energistically iterate corporate outsourcing for visionary results.",
      id: 3,
      img: photo,
      lead: "Construction",
      memberid: 0,
      stats: [
        {
          icon: "las la-users-cog",
          text: "Peoples at project",
          title: "17",
        },
        {
          icon: "las la-calendar-alt",
          text: "Days to completion",
          title: "141",
        },
        {
          icon: "las la-coffee",
          text: "Cups of coffee",
          title: "480",
        },
        {
          icon: "las la-comments",
          text: "Positive feedbacks",
          title: "700+",
        },
      ],
      text:
        "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "Workers equipment from first-grades",
    },
    {
      cats: "construction",
      clientid: "1",
      feedback:
        "Compellingly content architect backward-compatible models and quality communities. Professionally drive wireless benefits whereas orthogonal internal sources. Completely negotiate an expanded array of metrics and extensible interfaces.",
      full:
        "Phosfluorescently reconceptualize exceptional total linkage without holistic e-tailers. Objectively utilize functional e-tailers rather than economically sound infomediaries. Uniquely expedite user friendly communities and 24/365 leadership. Objectively enhance plug-and-play relationships vis-a-vis dynamic outside the box thinking.<br>Energistically cultivate reliable data without standardized mindshare. Holisticly incubate progressive process improvements with just in time niche markets. Collaboratively brand interactive quality vectors after virtual expertise. Globally harness progressive action items whereas revolutionary collaboration and idea-sharing. Quickly facilitate real-time data without client-focused communities.",
      id: 4,
      img: photo,
      lead: "Manufacture",
      memberid: 1,
      stats: [
        {
          icon: "las la-users-cog",
          text: "Peoples at project",
          title: "17",
        },
        {
          icon: "las la-calendar-alt",
          text: "Days to completion",
          title: "141",
        },
        {
          icon: "las la-coffee",
          text: "Cups of coffee",
          title: "480",
        },
        {
          icon: "las la-comments",
          text: "Positive feedbacks",
          title: "700+",
        },
      ],
      text:
        "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "When city become architecture miracle",
    },
    {
      cats: "construction management",
      clientid: "0",
      feedback:
        'Rapidiously syndicate professional e-services without wireless "outside the box" thinking. Distinctively seize proactive leadership via B2B alignments. Progressively myocardinate long-term high-impact manufactured products.',
      full:
        "Rapidiously leverage other's inexpensive leadership whereas cross-media outside the box thinking. Competently e-enable global interfaces after interdependent outside the box thinking. Competently brand timely expertise rather than inexpensive internal or organic sources. Continually scale high-quality niches before high-payoff resources. Professionally drive turnkey infomediaries for high standards in initiatives.<br> Enthusiastically facilitate front-end convergence with client-centered opportunities. Dynamically evolve compelling applications rather than pandemic partnerships. Uniquely cultivate goal-oriented information without cross-platform channels. Energistically customize B2B sources via distinctive leadership. Professionally initiate client-centered metrics without client-focused interfaces.",
      id: 5,
      img: photo,
      lead: "Engeneering",
      memberid: 2,
      stats: [
        {
          icon: "las la-users-cog",
          text: "Peoples at project",
          title: "17",
        },
        {
          icon: "las la-calendar-alt",
          text: "Days to completion",
          title: "141",
        },
        {
          icon: "las la-coffee",
          text: "Cups of coffee",
          title: "480",
        },
        {
          icon: "las la-comments",
          text: "Positive feedbacks",
          title: "700+",
        },
      ],
      text:
        "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "Systems in every project completion",
    },
    {
      cats: "construction contracting",
      clientid: "2",
      feedback:
        'Rapidiously syndicate professional e-services without wireless "outside the box" thinking. Distinctively seize proactive leadership via B2B alignments. Progressively myocardinate long-term high-impact manufactured products.',
      full:
        "Dramatically provide access to customer directed platforms before professional portals. Objectively foster revolutionary human capital for error-free materials. Quickly envisioneer prospective alignments and distributed best practices. Quickly empower ethical users with 24/7 experiences. Interactively myocardinate go forward alignments whereas high standards in data.<br> Synergistically benchmark clicks-and-mortar collaboration and idea-sharing before stand-alone products. Rapidiously simplify inexpensive process improvements via go forward value. Collaboratively e-enable bricks-and-clicks markets without web-enabled meta-services. Dramatically re-engineer state of the art e-business after cooperative internal or organic sources. Energistically iterate corporate outsourcing for visionary results.",
      id: 6,
      img: photo,
      lead: "Construction",
      memberid: 0,
      stats: [
        {
          icon: "las la-users-cog",
          text: "Peoples at project",
          title: "17",
        },
        {
          icon: "las la-calendar-alt",
          text: "Days to completion",
          title: "141",
        },
        {
          icon: "las la-coffee",
          text: "Cups of coffee",
          title: "480",
        },
        {
          icon: "las la-comments",
          text: "Positive feedbacks",
          title: "700+",
        },
      ],
      text:
        "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "Complete project for city statement",
    },
    {
      cats: "management",
      clientid: "3",
      feedback:
        "Compellingly content architect backward-compatible models and quality communities. Professionally drive wireless benefits whereas orthogonal internal sources. Completely negotiate an expanded array of metrics and extensible interfaces.",
      full:
        "Phosfluorescently reconceptualize exceptional total linkage without holistic e-tailers. Objectively utilize functional e-tailers rather than economically sound infomediaries. Uniquely expedite user friendly communities and 24/365 leadership. Objectively enhance plug-and-play relationships vis-a-vis dynamic outside the box thinking.<br>Energistically cultivate reliable data without standardized mindshare. Holisticly incubate progressive process improvements with just in time niche markets. Collaboratively brand interactive quality vectors after virtual expertise. Globally harness progressive action items whereas revolutionary collaboration and idea-sharing. Quickly facilitate real-time data without client-focused communities.",
      id: 7,
      img: photo,
      lead: "Manufacture",
      memberid: 1,
      stats: [
        {
          icon: "las la-users-cog",
          text: "Peoples at project",
          title: "17",
        },
        {
          icon: "las la-calendar-alt",
          text: "Days to completion",
          title: "141",
        },
        {
          icon: "las la-coffee",
          text: "Cups of coffee",
          title: "480",
        },
        {
          icon: "las la-comments",
          text: "Positive feedbacks",
          title: "700+",
        },
      ],
      text:
        "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "Stay on a bay compromise state",
    },
    {
      cats: "management contracting",
      clientid: "0",
      feedback:
        "Compellingly content architect backward-compatible models and quality communities. Professionally drive wireless benefits whereas orthogonal internal sources. Completely negotiate an expanded array of metrics and extensible interfaces.",
      full:
        "Rapidiously leverage other's inexpensive leadership whereas cross-media outside the box thinking. Competently e-enable global interfaces after interdependent outside the box thinking. Competently brand timely expertise rather than inexpensive internal or organic sources. Continually scale high-quality niches before high-payoff resources. Professionally drive turnkey infomediaries for high standards in initiatives.<br> Enthusiastically facilitate front-end convergence with client-centered opportunities. Dynamically evolve compelling applications rather than pandemic partnerships. Uniquely cultivate goal-oriented information without cross-platform channels. Energistically customize B2B sources via distinctive leadership. Professionally initiate client-centered metrics without client-focused interfaces.",
      id: 8,
      img: photo,
      lead: "Engeneering",
      memberid: 2,
      stats: [
        {
          icon: "las la-users-cog",
          text: "Peoples at project",
          title: "17",
        },
        {
          icon: "las la-calendar-alt",
          text: "Days to completion",
          title: "141",
        },
        {
          icon: "las la-coffee",
          text: "Cups of coffee",
          title: "480",
        },
        {
          icon: "las la-comments",
          text: "Positive feedbacks",
          title: "700+",
        },
      ],
      text:
        "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "Strong link with nature wildreness",
    },
    {
      cats: "construction management",
      clientid: "2",
      feedback:
        'Rapidiously syndicate professional e-services without wireless "outside the box" thinking. Distinctively seize proactive leadership via B2B alignments. Progressively myocardinate long-term high-impact manufactured products.',
      full:
        "Dramatically provide access to customer directed platforms before professional portals. Objectively foster revolutionary human capital for error-free materials. Quickly envisioneer prospective alignments and distributed best practices. Quickly empower ethical users with 24/7 experiences. Interactively myocardinate go forward alignments whereas high standards in data.<br> Synergistically benchmark clicks-and-mortar collaboration and idea-sharing before stand-alone products. Rapidiously simplify inexpensive process improvements via go forward value. Collaboratively e-enable bricks-and-clicks markets without web-enabled meta-services. Dramatically re-engineer state of the art e-business after cooperative internal or organic sources. Energistically iterate corporate outsourcing for visionary results.",
      id: 9,
      img: photo,
      lead: "Construction",
      memberid: 0,
      stats: [
        {
          icon: "las la-users-cog",
          text: "Peoples at project",
          title: "17",
        },
        {
          icon: "las la-calendar-alt",
          text: "Days to completion",
          title: "141",
        },
        {
          icon: "las la-coffee",
          text: "Cups of coffee",
          title: "480",
        },
        {
          icon: "las la-comments",
          text: "Positive feedbacks",
          title: "700+",
        },
      ],
      text:
        "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "Future of construction in life",
    },
    {
      cats: "contracting construction",
      clientid: "3",
      feedback:
        "Compellingly content architect backward-compatible models and quality communities. Professionally drive wireless benefits whereas orthogonal internal sources. Completely negotiate an expanded array of metrics and extensible interfaces.",
      full:
        "Phosfluorescently reconceptualize exceptional total linkage without holistic e-tailers. Objectively utilize functional e-tailers rather than economically sound infomediaries. Uniquely expedite user friendly communities and 24/365 leadership. Objectively enhance plug-and-play relationships vis-a-vis dynamic outside the box thinking.<br>Energistically cultivate reliable data without standardized mindshare. Holisticly incubate progressive process improvements with just in time niche markets. Collaboratively brand interactive quality vectors after virtual expertise. Globally harness progressive action items whereas revolutionary collaboration and idea-sharing. Quickly facilitate real-time data without client-focused communities.",
      id: 10,
      img: photo,
      lead: "Manufacture",
      memberid: 1,
      stats: [
        {
          icon: "las la-users-cog",
          text: "Peoples at project",
          title: "17",
        },
        {
          icon: "las la-calendar-alt",
          text: "Days to completion",
          title: "141",
        },
        {
          icon: "las la-coffee",
          text: "Cups of coffee",
          title: "480",
        },
        {
          icon: "las la-comments",
          text: "Positive feedbacks",
          title: "700+",
        },
      ],
      text:
        "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "Most ambitious project in history",
    },
    {
      cats: "contracting",
      clientid: "0",
      feedback:
        'Rapidiously syndicate professional e-services without wireless "outside the box" thinking. Distinctively seize proactive leadership via B2B alignments. Progressively myocardinate long-term high-impact manufactured products.',
      full:
        "Rapidiously leverage other's inexpensive leadership whereas cross-media outside the box thinking. Competently e-enable global interfaces after interdependent outside the box thinking. Competently brand timely expertise rather than inexpensive internal or organic sources. Continually scale high-quality niches before high-payoff resources. Professionally drive turnkey infomediaries for high standards in initiatives.<br> Enthusiastically facilitate front-end convergence with client-centered opportunities. Dynamically evolve compelling applications rather than pandemic partnerships. Uniquely cultivate goal-oriented information without cross-platform channels. Energistically customize B2B sources via distinctive leadership. Professionally initiate client-centered metrics without client-focused interfaces.",
      id: 11,
      img: photo,
      lead: "Engeneering",
      memberid: 2,
      stats: [
        {
          icon: "las la-users-cog",
          text: "Peoples at project",
          title: "17",
        },
        {
          icon: "las la-calendar-alt",
          text: "Days to completion",
          title: "141",
        },
        {
          icon: "las la-coffee",
          text: "Cups of coffee",
          title: "480",
        },
        {
          icon: "las la-comments",
          text: "Positive feedbacks",
          title: "700+",
        },
      ],
      text:
        "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "Skyscraper for modern city company",
    },
    {
      cats: "management",
      clientid: "3",
      feedback:
        "Compellingly content architect backward-compatible models and quality communities. Professionally drive wireless benefits whereas orthogonal internal sources. Completely negotiate an expanded array of metrics and extensible interfaces.",
      full:
        "Phosfluorescently reconceptualize exceptional total linkage without holistic e-tailers. Objectively utilize functional e-tailers rather than economically sound infomediaries. Uniquely expedite user friendly communities and 24/365 leadership. Objectively enhance plug-and-play relationships vis-a-vis dynamic outside the box thinking.<br>Energistically cultivate reliable data without standardized mindshare. Holisticly incubate progressive process improvements with just in time niche markets. Collaboratively brand interactive quality vectors after virtual expertise. Globally harness progressive action items whereas revolutionary collaboration and idea-sharing. Quickly facilitate real-time data without client-focused communities.",
      id: 12,
      img: photo,
      lead: "Manufacture",
      memberid: 0,
      stats: [
        {
          icon: "las la-users-cog",
          text: "Peoples at project",
          title: "17",
        },
        {
          icon: "las la-calendar-alt",
          text: "Days to completion",
          title: "141",
        },
        {
          icon: "las la-coffee",
          text: "Cups of coffee",
          title: "480",
        },
        {
          icon: "las la-comments",
          text: "Positive feedbacks",
          title: "700+",
        },
      ],
      text:
        "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "Green project with investors",
    },
  ],
  posts: [
    {
      category_id: 1,
      featured: true,
      full:
        "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities.<p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
      id: "post_0",
      image: photo,
      posting_date: "Feb 14, 2020",
      quote:
        "Enthusiastically generate multidisciplinary benefits rather than bricks-and-clicks action items. ",
      short:
        "Flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mout and idea-sharing.",
      title: "How to make your product the ferrari of business",
      user_id: "2",
    },
    {
      category_id: 2,
      featured: true,
      full:
        "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
      id: "post_1",
      image: photo,
      posting_date: "Feb 07, 2020",
      quote:
        "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
      short:
        "Treat yourself to a night re-living the golden age of the railway with a stay at The Old Railway Station in Petworth, West Sussex. Conveniently recaptiualize backward-compatible best",
      title: "Believe in your business skills but never stop improving",
      user_id: "1",
    },
    {
      category_id: 3,
      featured: true,
      full:
        "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
      id: "post_2",
      image: photo,
      posting_date: "Feb 12, 2020",
      quote:
        "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
      short:
        "The most important enjoy your lif thing is to enjoy your life - to be happy - it's enjoy your lif all that matters.",
      title: "Create a business your parents would be proud of",
      user_id: "2",
    },
    {
      category_id: 0,
      featured: true,
      full:
        "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
      id: "post_3",
      image: photo,
      posting_date: "Feb 11, 2020",
      quote:
        "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
      short:
        "From the enclosure wall of the cemetery you can enjoy a distant view to the west into the Pustertal",
      title: "How to become our partner and start do business",
      user_id: "3",
    },
    {
      category_id: 1,
      full:
        "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
      id: "post_4",
      image: photo,
      posting_date: "Feb 28, 2020",
      quote:
        "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
      short:
        "Dramatically expedite cross-media potentialities for worldwide services. Quickly engineer multidisciplinary innovation with best-of-breed e-commerce. Compellingly productivate.",
      title: "We create opportunity for new markets & industries",
      user_id: "0",
    },
    {
      category_id: 2,
      full:
        "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
      id: "post_5",
      image: photo,
      posting_date: "Feb 09, 2020",
      quote:
        "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
      short:
        "I carry my years without submitting to the regimen of time and its chronology of dates and seasons.",
      title: "Project start is time to celeprate",
      user_id: "1",
    },
    {
      category_id: 3,
      full:
        "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
      id: "post_6",
      image: photo,
      posting_date: "Feb 08, 2020",
      quote:
        "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
      short:
        "The loss of a single species is a tragic event and yet we lose an estimated 10,000 species to extinction every year",
      title: "Construction is reason to developing",
      user_id: "2",
    },
    {
      category_id: 0,
      full:
        "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
      id: "post_7",
      image: photo,
      posting_date: "Feb 07, 2020",
      quote:
        "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
      short:
        "Objectively streamline magnetic leadership skills vis-a-vis an expanded array of paradigms appropriately incentivize adaptive.",
      title: "To afford luxury life always work hard",
      user_id: "3",
    },
    {
      category_id: 1,
      full:
        "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
      id: "post_8",
      image: photo,
      posting_date: "Feb 06, 2020",
      quote:
        "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
      short:
        "Happiness is the universal feeling we all aspire to experience more of, yet, we can be an angry, moody",
      title: "Start you working process with tools",
      user_id: "0",
    },
    {
      category_id: 2,
      full:
        "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
      id: "post_9",
      image: photo,
      posting_date: "Feb 05, 2020",
      quote:
        "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
      short:
        "Treat yourself to a night relive laden age of the railway Petworth with stay at The Old Railway Station in West Sussex",
      title: "Create new way of manufacture",
      user_id: "1",
    },
    {
      category_id: 3,
      full:
        "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
      id: "post_10",
      image: photo,
      posting_date: "Feb 04, 2020",
      quote:
        "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
      short:
        "If I have a chance to whisper the best advice to a baby and he’ll remember it for the rest of his life is this",
      title: "Absolute knowledge on the business line",
      user_id: "2",
    },
    {
      category_id: 0,
      full:
        "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
      id: "post_11",
      image: photo,
      posting_date: "Feb 03, 2020",
      quote:
        "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
      short:
        "We have great creative team they always ready to helped you. voluptatem quiase voluptase aspernatur auted fugit",
      title: "Master your tools for best results",
      user_id: "3",
    },
    {
      category_id: 1,
      full:
        "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
      id: "post_12",
      image: photo,
      posting_date: "Feb 02, 2020",
      quote:
        "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
      short:
        "We have great creative team they always ready to helped you. voluptatem quiase voluptase aspernatur auted fugit",
      title: "Making business with minimal efforts",
      user_id: "0",
    },
    {
      category_id: 2,
      full:
        "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
      id: "post_13",
      image: photo,
      posting_date: "Feb 01, 2020",
      quote:
        "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
      short:
        "We have great creative team they always ready to helped you. voluptatem quiase voluptase aspernatur auted fugit",
      title: "Small business must evolve in big company",
      user_id: "1",
    },
  ],
  pricing: [
    {
      icon:
        "https://firebasestorage.googleapis.com/v0/b/cctv-a7975.appspot.com/o/icons%2F001-money.svg?alt=media&token=50fd58f2-52ba-406d-a741-16f8294baa49",
      price: "Free",
      services: {
        avaliable: 2,
        list: [
          "Support forum",
          "Free hosting",
          "40MB of storage space",
          "Social media integration",
          "10GB of storage space",
        ],
      },
      title: "basic",
    },
    {
      icon:
        "https://firebasestorage.googleapis.com/v0/b/cctv-a7975.appspot.com/o/icons%2F003-earth-grid.svg?alt=media&token=1f7c3083-418c-4a8a-88bb-4a01416b9a38",
      price: "$17",
      services: {
        avaliable: 3,
        list: [
          "Support forum",
          "Free hosting",
          "40MB of storage space",
          "Social media integration",
          "10GB of storage space",
        ],
      },
      title: "business",
    },
    {
      icon:
        "https://firebasestorage.googleapis.com/v0/b/cctv-a7975.appspot.com/o/icons%2F006-ladder-1.svg?alt=media&token=76a4cf83-b4f6-477b-9fb4-bea757d89831",
      price: "$47",
      services: {
        avaliable: 4,
        list: [
          "Support forum",
          "Free hosting",
          "40MB of storage space",
          "Social media integration",
          "10GB of storage space",
        ],
      },
      title: "advanced",
    },
    {
      icon:
        "https://firebasestorage.googleapis.com/v0/b/cctv-a7975.appspot.com/o/icons%2F007-success-4.svg?alt=media&token=9d7b2683-90fa-41dd-ab84-2acce788c76d",
      price: "$77",
      services: {
        avaliable: 5,
        list: [
          "Support forum",
          "Free hosting",
          "40MB of storage space",
          "Social media integration",
          "10GB of storage space",
        ],
      },
      title: "elite",
    },
  ],
  process: [
    {
      text:
        "Distinctively disintermediate inexpensive e-commerce rather than orthogonal opportunities. Seamlessly deploy virtual experiences through collaborative.",
      title:
        "Collaboratively reinvent seamless methodologies through reliable data",
    },
    {
      text:
        "Intrinsicly enhance diverse niche markets with extensive deliverables. Conveniently grow user-centric architectures via pandemic web-readiness. Quickly underwhelm customized sources through interactive ideas. ",
      title: "Professionally predominate clicks-and-mortar communities",
    },
    {
      text:
        "Uniquely negotiate market positioning architectures with leading-edge services. Energistically formulate end-to-end deliverables through visionary imperatives.",
      title: "Objectively maintain sustainable infomediaries",
    },
  ],
  reviews: [
    {
      author: "Marta Kaufman",
      id: 0,
      img: photo,
      status: "CEO of General Electrics",
      text:
        "Efficiently supply dynamic methodologies after equity invested alignments. Professionally fashion adaptive initiatives after enterprise-wide methodologies. Competently recaptiualize competitive best practices for client-focused technologies. ",
      title: "BuildStars help me to grow my business beyound country limits.",
    },
    {
      author: "Robert Tompson",
      id: 1,
      img: photo,
      status: "Director of Macrosoft",
      text:
        "Rapidiously transform end-to-end strategic theme areas through functional information. Enthusiastically engage pandemic systems rather than installed base manufactured products. Quickly promote market positioning bandwidth before transparent sources. ",
      title: "Extremely good service and amazing support. Highly recommend.",
    },
    {
      author: "Edvard Wright",
      id: 2,
      img: photo,
      status: "Manager of Global Store",
      text:
        "Compellingly content architect backward-compatible models and quality communities. Professionally drive wireless benefits whereas orthogonal internal sources. Completely negotiate an expanded array of metrics and extensible interfaces. ",
      title: "Their products professional and support is personal oriented",
    },
    {
      author: "Chriss Hemsworth",
      id: 3,
      img: photo,
      status: "Customer",
      text:
        'Rapidiously syndicate professional e-services without wireless "outside the box" thinking. Distinctively seize proactive leadership via B2B alignments. Progressively myocardinate long-term high-impact manufactured products.',
      title:
        "Pretty good company in our small town. Work with respect to our needs.",
    },
  ],
  services: [
    {
      full:
        "Continually incubate standards compliant customer service rather than professional initiatives. Intrinsicly whiteboard web-enabled potentialities via team building supply chains. Collaboratively integrate granular innovation and performance based intellectual capital. Compellingly redefine multimedia based paradigms for high-quality portals. Quickly build out-of-the-box e-tailers for customer directed opportunities.",
      icon: icon,
      id: 0,
      img: photo,
      steps: [
        {
          text:
            "Competently benchmark multifunctional data with cross-unit               synergy. Synergistically incubate user-centric content rather than               2.0 paradigms. Interactively enable optimal scenarios with effective channels.",
          title: "Construction project planning",
        },
        {
          text:
            "Competently benchmark multifunctional data with cross-unit               synergy. Synergistically incubate user-centric content rather than               2.0 paradigms. Interactively enable optimal scenarios with effective channels.",
          title: "Monitor and coordinate all work",
        },
        {
          text:
            "Competently benchmark multifunctional data with cross-unit               synergy. Synergistically incubate user-centric content rather than               2.0 paradigms. Interactively enable optimal scenarios with effective channels.",
          title: "Post construction phase",
        },
      ],
      subtitle: "Handling of construction materials",
      text:
        "Globally leverage existing error-free models and B2B products. Professionally productize interdependent value without bricks-and-clicks niches.",
      title: "Construction",
    },
    {
      featured: "yes",
      full:
        "Continually incubate standards compliant customer service rather than professional initiatives. Intrinsicly whiteboard web-enabled potentialities via team building supply chains. Collaboratively integrate granular innovation and performance based intellectual capital. Compellingly redefine multimedia based paradigms for high-quality portals. Quickly build out-of-the-box e-tailers for customer directed opportunities.",
      icon: icon,
      id: 1,
      img: photo,
      steps: [
        {
          text:
            "Competently benchmark multifunctional data with cross-unit               synergy. Synergistically incubate user-centric content rather than               2.0 paradigms. Interactively enable optimal scenarios with effective channels.",
          title: "Construction project planning",
        },
        {
          text:
            "Competently benchmark multifunctional data with cross-unit               synergy. Synergistically incubate user-centric content rather than               2.0 paradigms. Interactively enable optimal scenarios with effective channels.",
          title: "Monitor and coordinate all work",
        },
        {
          text:
            "Competently benchmark multifunctional data with cross-unit               synergy. Synergistically incubate user-centric content rather than               2.0 paradigms. Interactively enable optimal scenarios with effective channels.",
          title: "Post construction phase",
        },
      ],
      subtitle: "Making planning for ptoject",
      text:
        "Globally leverage existing error-free models and B2B products. Professionally productize interdependent value without bricks-and-clicks niches.",
      title: "Loghistic",
    },
    {
      full:
        "Continually incubate standards compliant customer service rather than professional initiatives. Intrinsicly whiteboard web-enabled potentialities via team building supply chains. Collaboratively integrate granular innovation and performance based intellectual capital. Compellingly redefine multimedia based paradigms for high-quality portals. Quickly build out-of-the-box e-tailers for customer directed opportunities.",
      icon: icon,
      id: 2,
      img: photo,
      steps: [
        {
          text:
            "Competently benchmark multifunctional data with cross-unit               synergy. Synergistically incubate user-centric content rather than               2.0 paradigms. Interactively enable optimal scenarios with effective channels.",
          title: "Construction project planning",
        },
        {
          text:
            "Competently benchmark multifunctional data with cross-unit               synergy. Synergistically incubate user-centric content rather than               2.0 paradigms. Interactively enable optimal scenarios with effective channels.",
          title: "Monitor and coordinate all work",
        },
        {
          text:
            "Competently benchmark multifunctional data with cross-unit               synergy. Synergistically incubate user-centric content rather than               2.0 paradigms. Interactively enable optimal scenarios with effective channels.",
          title: "Post construction phase",
        },
      ],
      subtitle: "Create value for future product",
      text:
        "Globally leverage existing error-free models and B2B products. Professionally productize interdependent value without bricks-and-clicks niches.",
      title: "Manufacture",
    },
    {
      full:
        "Continually incubate standards compliant customer service rather than professional initiatives. Intrinsicly whiteboard web-enabled potentialities via team building supply chains. Collaboratively integrate granular innovation and performance based intellectual capital. Compellingly redefine multimedia based paradigms for high-quality portals. Quickly build out-of-the-box e-tailers for customer directed opportunities.",
      icon: icon,
      id: 3,
      img: photo,
      steps: [
        {
          text:
            "Competently benchmark multifunctional data with cross-unit               synergy. Synergistically incubate user-centric content rather than               2.0 paradigms. Interactively enable optimal scenarios with effective channels.",
          title: "Construction project planning",
        },
        {
          text:
            "Competently benchmark multifunctional data with cross-unit               synergy. Synergistically incubate user-centric content rather than               2.0 paradigms. Interactively enable optimal scenarios with effective channels.",
          title: "Monitor and coordinate all work",
        },
        {
          text:
            "Competently benchmark multifunctional data with cross-unit               synergy. Synergistically incubate user-centric content rather than               2.0 paradigms. Interactively enable optimal scenarios with effective channels.",
          title: "Post construction phase",
        },
      ],
      subtitle: "Manage workers for productive results",
      text:
        "Globally leverage existing error-free models and B2B products. Professionally productize interdependent value without bricks-and-clicks niches.",
      title: "Building",
    },
    {
      full:
        "Continually incubate standards compliant customer service rather than professional initiatives. Intrinsicly whiteboard web-enabled potentialities via team building supply chains. Collaboratively integrate granular innovation and performance based intellectual capital. Compellingly redefine multimedia based paradigms for high-quality portals. Quickly build out-of-the-box e-tailers for customer directed opportunities.",
      icon: icon,
      id: 4,
      img: photo,
      steps: [
        {
          text:
            "Competently benchmark multifunctional data with cross-unit               synergy. Synergistically incubate user-centric content rather than               2.0 paradigms. Interactively enable optimal scenarios with effective channels.",
          title: "Construction project planning",
        },
        {
          text:
            "Competently benchmark multifunctional data with cross-unit               synergy. Synergistically incubate user-centric content rather than               2.0 paradigms. Interactively enable optimal scenarios with effective channels.",
          title: "Monitor and coordinate all work",
        },
        {
          text:
            "Competently benchmark multifunctional data with cross-unit               synergy. Synergistically incubate user-centric content rather than               2.0 paradigms. Interactively enable optimal scenarios with effective channels.",
          title: "Post construction phase",
        },
      ],
      subtitle: "Make connections with industry leaders",
      text:
        "Globally leverage existing error-free models and B2B products. Professionally productize interdependent value without bricks-and-clicks niches.",
      title: "Management",
    },
    {
      featured: "yes",
      full:
        "Continually incubate standards compliant customer service rather than professional initiatives. Intrinsicly whiteboard web-enabled potentialities via team building supply chains. Collaboratively integrate granular innovation and performance based intellectual capital. Compellingly redefine multimedia based paradigms for high-quality portals. Quickly build out-of-the-box e-tailers for customer directed opportunities.",
      icon: icon,
      id: 5,
      img: photo,
      steps: [
        {
          text:
            "Competently benchmark multifunctional data with cross-unit               synergy. Synergistically incubate user-centric content rather than               2.0 paradigms. Interactively enable optimal scenarios with effective channels.",
          title: "Construction project planning",
        },
        {
          text:
            "Competently benchmark multifunctional data with cross-unit               synergy. Synergistically incubate user-centric content rather than               2.0 paradigms. Interactively enable optimal scenarios with effective channels.",
          title: "Monitor and coordinate all work",
        },
        {
          text:
            "Competently benchmark multifunctional data with cross-unit               synergy. Synergistically incubate user-centric content rather than               2.0 paradigms. Interactively enable optimal scenarios with effective channels.",
          title: "Post construction phase",
        },
      ],
      subtitle: "Create channel of distribution",
      text:
        "Globally leverage existing error-free models and B2B products. Professionally productize interdependent value without bricks-and-clicks niches.",
      title: "Distribution",
    },
  ],
  team: [
    {
      about:
        "Professionally deploy revolutionary information rather than multimedia based channels. Continually leverage existing B2B value vis-a-vis magnetic best practices. Dynamically syndicate alternative e-services without leveraged methodologies. Intrinsicly envisioneer cutting-edge relationships for pandemic meta-services.",
      id: 0,
      img: photo,
      job: "Designer",
      name: "Martin Tompson",
      skills: [
        "Front-End: 90",
        "Wordpress: 80",
        "React Native: 70",
        "UI / UX Design: 80",
      ],
      stats: [
        {
          icon: "las la-clock",
          text: "Hours per week",
          title: "40+",
        },
        {
          icon: "las la-briefcase",
          text: "Projects completed",
          title: "170",
        },
        {
          icon: "las la-user-check",
          text: "Satisfied clients",
          title: "74",
        },
        {
          icon: "las la-trophy",
          text: "Competition winned",
          title: "140",
        },
      ],
    },
    {
      about:
        "Professionally deploy revolutionary information rather than multimedia based channels. Continually leverage existing B2B value vis-a-vis magnetic best practices. Dynamically syndicate alternative e-services without leveraged methodologies. Intrinsicly envisioneer cutting-edge relationships for pandemic meta-services.",
      id: 1,
      img: photo,
      job: "Developer",
      name: "Juliana Redford",
      skills: [
        "Front-End: 90",
        "Wordpress: 80",
        "React Native: 70",
        "UI / UX Design: 80",
      ],
      stats: [
        {
          icon: "las la-clock",
          text: "Hours per week",
          title: "40+",
        },
        {
          icon: "las la-briefcase",
          text: "Projects completed",
          title: "170",
        },
        {
          icon: "las la-user-check",
          text: "Satisfied clients",
          title: "74",
        },
        {
          icon: "las la-trophy",
          text: "Competition winned",
          title: "140",
        },
      ],
    },
    {
      about:
        "Professionally deploy revolutionary information rather than multimedia based channels. Continually leverage existing B2B value vis-a-vis magnetic best practices. Dynamically syndicate alternative e-services without leveraged methodologies. Intrinsicly envisioneer cutting-edge relationships for pandemic meta-services.",
      id: 2,
      img: photo,
      job: "CEO, Director",
      name: "Robert Ferguson",
      skills: [
        "Front-End: 90",
        "Wordpress: 80",
        "React Native: 70",
        "UI / UX Design: 80",
      ],
      stats: [
        {
          icon: "las la-clock",
          text: "Hours per week",
          title: "40+",
        },
        {
          icon: "las la-briefcase",
          text: "Projects completed",
          title: "170",
        },
        {
          icon: "las la-user-check",
          text: "Satisfied clients",
          title: "74",
        },
        {
          icon: "las la-trophy",
          text: "Competition winned",
          title: "140",
        },
      ],
    },
  ],
  users: [
    {
      about:
        "Efficiently visualize cutting-edge architectures vis-a-vis one-to-one collaboration and idea-sharing. Conveniently harness just in time niche markets after frictionless interfaces. Uniquely underwhelm frictionless imperatives and covalent users. Compellingly synthesize granular human capital before timely resources. ",
      id: 0,
      img:
        "https://firebasestorage.googleapis.com/v0/b/cctv-a7975.appspot.com/o/reviews%2Fr1.jpg?alt=media&token=295fff4a-6766-4a97-9e3b-6c0f4c704c62",
      name: "Marta Smith",
    },
    {
      about:
        "Efficiently visualize cutting-edge architectures vis-a-vis one-to-one collaboration and idea-sharing. Conveniently harness just in time niche markets after frictionless interfaces. Uniquely underwhelm frictionless imperatives and covalent users. Compellingly synthesize granular human capital before timely resources. ",
      id: 1,
      img:
        "https://firebasestorage.googleapis.com/v0/b/cctv-a7975.appspot.com/o/reviews%2Fr2.jpg?alt=media&token=b7b35188-bfc7-409d-9ad8-78bc89b36abc",
      name: "Mark Roberts",
    },
    {
      about:
        "Efficiently visualize cutting-edge architectures vis-a-vis one-to-one collaboration and idea-sharing. Conveniently harness just in time niche markets after frictionless interfaces. Uniquely underwhelm frictionless imperatives and covalent users. Compellingly synthesize granular human capital before timely resources. ",
      id: 2,
      img:
        "https://firebasestorage.googleapis.com/v0/b/cctv-a7975.appspot.com/o/reviews%2Fr3.jpg?alt=media&token=40783389-abdc-4a53-8ea6-ee691732c668",
      name: "Fred Johnson",
    },
    {
      about:
        "Efficiently visualize cutting-edge architectures vis-a-vis one-to-one collaboration and idea-sharing. Conveniently harness just in time niche markets after frictionless interfaces. Uniquely underwhelm frictionless imperatives and covalent users. Compellingly synthesize granular human capital before timely resources. ",
      id: 3,
      img:
        "https://firebasestorage.googleapis.com/v0/b/cctv-a7975.appspot.com/o/reviews%2Fr4.jpg?alt=media&token=f324453f-3080-41bf-80a4-94dd1e20e10f",
      name: "Ron Anderson",
    },
  ],
  video: {
    header: "",
    about: "",
  },
};

Mock.onGet("/api/data").reply((config) => {
  const response = database;
  return [200, response];
});
