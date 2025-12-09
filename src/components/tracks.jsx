import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState } from "react"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ChevronLeft, Clock, BookOpen, ExternalLink, CheckCircle2, ChevronDown } from "lucide-react"
import "../styles/tracks.css"
import { icon } from "@fortawesome/fontawesome-svg-core";
// Roadmap details 
const roadmapDetails = {
    // DATA STRUCTURES 
  "Data Structures Fundamentals": {
    id: 1,
    title: "Data Structures Fundamentals",
    description:
      "Learn the basics of arrays, linked lists, stacks, and queues. Master the foundation of computer science.",
    level: "Beginner",
    duration: "4 weeks",
    steps: [
      {
        number: 1,
        title: "Introduction to Data Structures",
        description: "Understand what data structures are and why they matter.",
        topics: [
          "What is a data structure?",
          "Memory management",
          "Time and space complexity"
        ],
        resources: [
          {
            name: "Data Structures Guide",
            url: "https://www.geeksforgeeks.org/data-structures/",
            type: 'document',
            icon:'📄'
          },
          {
            name: "CS50 Introduction",
            url: "https://cs50.harvard.edu",
            type: 'course',
            icon: "📚"
          }
        ]
      },
      {
        number: 2,
        title: "Arrays and Lists",
        description: "Master the basics of arrays and dynamic lists.",
        topics: [
          "Static arrays",
          "Dynamic arrays",
          "List operations",
          "Time complexity"
        ],
        resources: [
          {
            name: "Arrays Documentation",
            url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/",
            type: "document",
            icon:'📄'
          },
          {
            name: "Udemy Arrays Course",
            url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/",
            type: "course",
            icon: "📚"
          }
        ]
      },
      {
        number: 3,
        title: "Stacks",
        description: "Learn how stacks work and their real-world applications.",
        topics: [
          "LIFO principle",
          "Stack operations",
          "Implementation",
          "Use cases"
        ],
        resources: [
          {
            name: "Stacks Tutorial",
            url: "https://www.programiz.com/dsa/stack",
            type: "document",
            icon:'📄'
          },
          {
            name: "Stack Implementation Course",
            url: "https://www.freecodecamp.org/news/stack-data-structure/",
            type:"course",
            icon: "📚"
          }
        ]
      },
      {
        number: 4,
        title: "Queues",
        description: "Understand queues and their variations.",
        topics: [
          "FIFO principle",
          "Queue operations",
          "Priority queues",
          "Circular queues"
        ],
        resources: [
          {
            name: "Queues Guide",
            url: "https://www.programiz.com/dsa/queue",
            type: "document",
            icon:'📄'
          },
          {
            name: "Advanced Queues Course",
            url: "https://www.freecodecamp.org/news/queue-data-structure/",
            type: "course",
            icon: "📚"
          }
        ]
      },
      {
        number: 5,
        title: "Linked Lists",
        description: "Explore linked lists and their advantages.",
        topics: [
          "Singly linked lists",
          "Doubly linked lists",
          "Operations",
          "Advantages vs arrays"
        ],
        resources: [
          {
            name: "Linked Lists Reference",
            url: "https://www.geeksforgeeks.org/data-structures/linked-list/",
            type: "document",
            icon:'📄'
          }
        ]
      },
      {
        number: 6,
        title: "Trees",
        description: "Introduction to tree data structures.",
        topics: [
          "Binary trees",
          "Tree terminology",
          "Tree traversal",
          "Basic operations"
        ],
        resources: [
          {
            name: "Trees Documentation",
            url: "https://www.programiz.com/dsa/binary-tree",
            type: "document",
            icon:'📄'
          }
        ]
      },
      {
        number: 7,
        title: "Hashing and Hash Tables",
        description: "Learn about hash functions and hash tables.",
        topics: [
          "Hash functions",
          "Collision handling",
          "Hash table operations",
          "Performance"
        ],
        resources: [
          {
            name: "GeeksforGeeks Hashing Tutorial",
            url: "https://www.geeksforgeeks.org/hashing-data-structure/",
            type: "document",
            icon: "📄"
          }
        ]
      },
      {
        number: 8,
        title: "Graphs Basics",
        description: "Get started with graph data structures.",
        topics: [
          "Graph representation",
          "Directed and undirected graphs",
          "Basic terminology"
        ],
        resources: [
          {
            name: "Programiz Graphs Tutorial",
            url: "https://www.programiz.com/dsa/graph",
            type: "document",
            icon: "📄"
          }
        ]
      },
      {
        number: 9,
        title: "Practice: Building a Stack",
        description: "Implement a stack from scratch.",
        topics: ["Implementation", "Edge cases", "Testing"],
        
      },
      {
        number: 10,
        title: "Practice: Building a Queue",
        description: "Implement a queue from scratch.",
        topics: ["Implementation", "Circular queue", "Testing"]
      },
      {
        number: 11,
        title: "Practice: Linked List Operations",
        description: "Implement common linked list operations.",
        topics: ["Insertion", "Deletion", "Reversal", "Testing"]
      },
      {
        number: 12,
        title: "Mini Project: Create a To-Do List",
        description:
          "Build a simple to-do application using learned data structures.",
        topics: ["Project planning", "Implementation", "Testing", "Optimization"]
      }
    ]
  },

  // WEB DEV

  "Web Development Basics": {
    id: 2,
    title: "Web Development Basics",
    description: "Master HTML, CSS, and JavaScript fundamentals.",
    level: "Beginner",
    duration: "6 weeks",
    steps: [
      {
        number: 1,
        title: "HTML Fundamentals",
        description: "Learn the structure of web pages with HTML.",
        topics: ["HTML tags", "Document structure", "Forms", "Semantic HTML"],
        resources: [
          {
            name: "HTML Guide",
            url: "https://developer.mozilla.org/en-US/docs/Learn/HTML",
            type: "document",
            icon:'📄'
          },
          {
            name: "Udemy HTML Course",
            url: "https://www.freecodecamp.org/learn/responsive-web-design/",
            type: "course",
            icon: "📚"
          }
        ]
      },
      {
        number: 2,
        title: "CSS Basics",
        description: "Style your web pages with CSS.",
        topics: ["Selectors", "Properties", "Box model", "Layout basics"],
        resources: [
          {
            name: "MDN CSS Guide",
            url: "https://developer.mozilla.org/en-US/docs/Learn/CSS",
            type: "document",
            icon: "📄"
          },
          {
            name: "FreeCodeCamp CSS Course",
            url: "https://www.freecodecamp.org/learn/responsive-web-design/#basic-css",
            type: "course",
            icon: "📚"
          }
        ]
      },
      {
        number: 3,
        title: "JavaScript Essentials",
        description: "Add interactivity with JavaScript.",
        topics: ["Variables", "Functions", "DOM manipulation", "Events"],
        resources: [
          {
            name: "MDN JavaScript Guide",
            url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript",
            type: "document",
            icon: "📄"
          },
          {
            name: "FreeCodeCamp JavaScript Course",
            url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/",
            type: "course",
            icon: "📚"
          }
        ]
      },
      {
        number: 4,
        title: "Responsive Design",
        description: "Make websites work on all devices.",
        topics: ["Media queries", "Flexbox", "Grid", "Mobile-first design"]
      },
      {
        number: 5,
        title: "Web APIs",
        description: "Work with browser APIs and web standards.",
        topics: ["Fetch API", "Local storage", "Geolocation", "Notifications"]
      },
      {
        number: 6,
        title: "Project: Personal Portfolio",
        description: "Build your first website.",
        topics: ["Planning", "Implementation", "Deployment", "Best practices"]
      }
    ]
  },

  // ALGORITHMS 

  "Advanced Algorithms": {
    id: 3,
  title: "Advanced Algorithms",
  description: "Dive deep into sorting, searching, and graph algorithms.",
  level: "Intermediate",
  duration: "8 weeks",
  steps: [
    {
      number: 1,
      title: "Mastering Sorting Algorithms",
      description:
        "Understand how classic sorting algorithms work, why they differ, and when to use each one.",
      topics: [
        "Bubble, Selection, Insertion sorting",
        "Divide-and-conquer sorting (Merge / Quick Sort)",
        "Time complexity comparison"
      ],
      resources: [
        {
          name: "Understanding Sorting Algorithms",
          url: "https://www.freecodecamp.org/news/understanding-sorting-algorithms/",
          type: "course",
          icon: "📚"
        },
        {
          name: "Programiz Sorting Algorithms Overview",
          url: "https://www.programiz.com/dsa/sorting-algorithm",
          type: "document",
          icon: "📄"
        }
      ]
    },
    {
      number: 2,
      title: "Advanced Searching Techniques",
      description:
        "Learn efficient ways to search through massive datasets and structured collections.",
      topics: ["Binary search", "Searching trees", "Search complexity"],
      resources: [
        {
          name: "GeeksforGeeks DSA Tutorial (includes searching + complexity)",
          url: "https://www.geeksforgeeks.org/dsa/dsa-tutorial-learn-data-structures-and-algorithms/",
          type: "document",
          icon: "📄"
        }
      ]
    },
    {
      number: 3,
      title: "Greedy Algorithms Explained",
      description:
        "Discover how greedy algorithms make optimal choices at each step to solve specific problems.",
      topics: ["Greedy strategy", "Optimality", "Activity selection problem"],
      resources: [
        {
          name: "GeeksforGeeks Greedy Algorithms Tutorial",
          url: "https://www.geeksforgeeks.org/greedy-algorithms/",
          type: "document",
          icon: "📄"
        }
      ]
    },
    {
      number: 4,
      title: "Dynamic Programming (DP) Concepts",
      description:
        "Learn how DP breaks problems into overlapping subproblems and reuses solutions.",
      topics: ["Memoization", "Tabulation", "Classic DP problems"],
      resources: [
        {
          name: "Learn X in Y Minutes – Dynamic Programming",
          url: "https://learnxinyminutes.com/dynamic-programming/",
          type: "document",
          icon: "📄"
        }
      ]
    },
    {
      number: 5,
      title: "Backtracking Algorithms",
      description:
        "Understand how backtracking systematically searches for solutions by exploring all possibilities.",
      topics: ["Recursion tree", "Constraint satisfaction", "N-Queens problem"],
      resources: [
        {
          name: "GeeksforGeeks Backtracking Algorithms",
          url: "https://www.geeksforgeeks.org/backtracking-algorithms/",
          type: "document",
          icon: "📄"
        }
      ]
    },
    {
      number: 6,
      title: "Graph Theory Basics",
      description:
        "Explore graph data structures and understand relationships represented by nodes and edges.",
      topics: ["Graph types", "Representations", "Applications"],
      resources: [
        {
          name: "freeCodeCamp – Learn How Graph Algorithms Work",
          url: "https://www.freecodecamp.org/news/learn-how-graph-algorithms-work/",
          type: "course",
          icon: "📚"
        },
        {
          name: "Programiz Graph Tutorial",
          url: "https://www.programiz.com/dsa/graph",
          type: "document",
          icon: "📄"
        }
      ]
    },
    {
      number: 7,
      title: "Graph Traversal Techniques",
      description:
        "Learn how to traverse graphs efficiently and explore connected components.",
      topics: ["BFS", "DFS", "Traversal complexity"],
      resources: [
        {
          name: "freeCodeCamp – Learn How Graph Algorithms Work",
          url: "https://www.freecodecamp.org/news/learn-how-graph-algorithms-work/",
          type: "course",
          icon: "📚"
        }
      ]
    },
    {
      number: 8,
      title: "Shortest Path Algorithms",
      description:
        "Learn algorithms used in GPS systems, networking, and routing.",
      topics: ["Dijkstra", "Bellman-Ford", "Weighted graphs"],
      resources: [
        {
          name: "Programiz Graph Algorithms (includes shortest paths)",
          url: "https://www.programiz.com/dsa/graph",
          type: "document",
          icon: "📄"
        }
      ]
    },
    {
      number: 9,
      title: "Minimum Spanning Trees (MST)",
      description:
        "Understand how MST algorithms reduce network cost in an optimal way.",
      topics: ["Kruskal", "Prim", "Union-Find"],
       resources: [
        {
          name: "GeeksforGeeks Minimum Spanning Tree Tutorial",
          url: "https://www.geeksforgeeks.org/prims-minimum-spanning-tree-mst-greedy-algo-5/",
          type: "document",
          icon: "📄"
        }
      ]
    },
    {
      number: 10,
      title: "Divide and Conquer Approach",
      description:
        "Learn how complex problems can be solved by repeatedly dividing into smaller ones.",
      topics: ["Problem decomposition", "Examples", "Performance"],
      resources: [
        {
          name: "GeeksforGeeks Divide and Conquer Algorithms",
          url: "https://www.geeksforgeeks.org/divide-and-conquer-algorithm-introduction/",
          type: "document",
          icon: "📄"
        }
      ]
    },
    {
      number: 11,
      title: "String Searching Algorithms",
      description:
        "Explore efficient ways to match patterns inside large strings.",
      topics: ["KMP", "Rabin-Karp", "Pattern preprocessing"],
      resources: [
        {
          name: "GeeksforGeeks String Matching Algorithms",
          url: "https://www.geeksforgeeks.org/string-searching-algorithms-in-java/",
          type: "document",
          icon: "📄"
        }
      ]
    },
    {
      number: 12,
      title: "Advanced Recursion Techniques",
      description:
        "Go deeper into recursive patterns and understand optimizations.",
      topics: ["Tail recursion", "Recursion depth", "Optimization"],
      resources: [
        {
          name: "GeeksforGeeks Recursion Tutorial",
          url: "https://www.geeksforgeeks.org/recursion/",
          type: "document",
          icon: "📄"
        }
      ]
    },
    {
      number: 13,
      title: "Heuristic Algorithms",
      description:
        "Learn approximation methods used when exact solutions are expensive.",
      topics: ["A* search", "Heuristic design", "Applications"],
      resources: [
        {
          name: "GeeksforGeeks A* and Heuristic Algorithms",
          url: "https://www.geeksforgeeks.org/a-search-algorithm/​",
          type: "document",
          icon: "📄"
        }
      ]
    },
    {
      number: 14,
      title: "Bit Manipulation Techniques",
      description:
        "Use binary operations to solve problems efficiently with minimal memory.",
      topics: ["Bitwise tricks", "Masks", "Low-level optimizations"],
      resources: [
        {
          name: "GeeksforGeeks Bitwise Algorithms",
          url: "https://www.geeksforgeeks.org/bitwise-algorithms/​",
          type: "document",
          icon: "📄"
        }
      ]
    },
    {
      number: 15,
      title: "Complexity Analysis Mastery",
      description:
        "Deep dive into time and space analysis for building optimal algorithms.",
      topics: ["Big-O", "Lower bounds", "Performance profiling"],
      resources: [
        {
          name: "GeeksforGeeks Analysis of Algorithms",
          url: "https://www.geeksforgeeks.org/analysis-of-algorithms-set-1-asymptotic-analysis/",
          type: "document",
          icon: "📄"
        }
      ]
    },
    {
      number: 16,
      title: "Advanced Graph Algorithms",
      description:
        "Learn powerful techniques used in real-world network systems.",
      topics: ["Topological sort", "Strongly connected components", "Cycle detection"],
      resources: [
        {
          name: "GeeksforGeeks Graph Algorithms Tutorial",
          url: "https://www.geeksforgeeks.org/graph-algorithms/​",
          type: "document",
          icon: "📄"
        }
      ]
    },
    {
      number: 17,
      title: "Network Flow Algorithms",
      description:
        "Understand algorithms used in scheduling, matching, and resource allocation.",
      topics: ["Ford-Fulkerson", "Max flow", "Matching problems"],
      resources: [
        {
          name: "GeeksforGeeks Max Flow Algorithms",
          url: "https://www.geeksforgeeks.org/ford-fulkerson-algorithm-for-maximum-flow-problem/",
          type: "document",
          icon: "📄"
        }
      ]
    },
    {
      number: 18,
      title: "Optimization Problems",
      description:
        "Learn how to optimize algorithms for performance in real environments.",
      topics: ["Pruning", "Caching", "Performance strategies"],
      resources: [
        {
          name: "GeeksforGeeks Algorithmic Optimizations Guide",
          url: "https://www.geeksforgeeks.org/algorithmic-optimizations/​",
          type: "document",
          icon: "📄"
        }
      ]
    },
    {
      number: 19,
      title: "Advanced Data Structures in Algorithms",
      description:
        "Explore powerful structures that enhance algorithm performance.",
      topics: ["Heaps", "Tries", "Segment trees"],
      resources: [
        {
          name: "GeeksforGeeks Data Structures Advanced (Heap, Trie)",
          url: "https://www.geeksforgeeks.org/data-structures/​",
          type: "document",
          icon: "📄"
        }
      ]
    },
    {
      number: 20,
      title: "Capstone: Applying All Techniques",
      description:
        "Solve real-world problems using a combination of all algorithmic techniques.",
      topics: ["Problem decomposition", "Strategy mixing", "Final project"],
      resources: [
        {
          name: "freeCodeCamp – Algorithms & Data Structures Full Course",
          url: "https://www.youtube.com/watch?v=8hly31xKli0",
          type: "course",
          icon: "📚"
        }
      ]
    }
  ]
},


  // SYSTEM DESIGN

  "System Design Principles": {
    id: 4,
  title: "System Design Principles",
  description: "Learn scalability, load balancing, and distributed systems.",
  level: "Intermediate",
  duration: "10 weeks",
  steps: [
    { number: 1, title: "Scalability Fundamentals", description: "Learn what scalability means and how systems grow effectively.", topics: ["Horizontal scaling", "Vertical scaling", "Bottlenecks"] },
    { number: 2, title: "Load Balancing Essentials", description: "Understand how to distribute traffic across multiple servers.", topics: ["Load balancers", "Strategies", "Failover"] },
    { number: 3, title: "Caching Strategies", description: "Boost performance by reducing repeated computations and database queries.", topics: ["Redis", "Cache policies", "Eviction"] },
    { number: 4, title: "Database Sharding", description: "Learn how to split large databases to improve performance.", topics: ["Shard keys", "Horizontal partitioning", "Rebalancing"] },
    { number: 5, title: "Database Replication", description: "Improve availability and reliability using replication.", topics: ["Master-slave", "Multi-primary", "Sync vs async"] },
    { number: 6, title: "Message Queues", description: "Learn how systems communicate asynchronously.", topics: ["Kafka", "RabbitMQ", "Decoupling"] },
    { number: 7, title: "Distributed Systems Basics", description: "Understand systems that run across multiple machines.", topics: ["CAP theorem", "Consistency models", "Partition tolerance"] },
    { number: 8, title: "Microservices Architecture", description: "Move from monoliths to flexible distributed microservices.", topics: ["Service boundaries", "API gateway", "Service discovery"] },
    { number: 9, title: "API Design Best Practices", description: "Learn how to design clean, scalable APIs.", topics: ["REST", "Rate limiting", "Versioning"] },
    { number: 10, title: "CDN & Content Delivery", description: "Distribute content faster around the world.", topics: ["Edge caching", "Latency reduction", "Static content"] },
    { number: 11, title: "Security Fundamentals", description: "Protect your system from common threats.", topics: ["OWASP", "DDOS", "AuthN/AuthZ"] },
    { number: 12, title: "Monitoring & Logging", description: "Track system performance and errors efficiently.", topics: ["Metrics", "Dashboards", "Alerts"] },
    { number: 13, title: "Fault Tolerance", description: "Make systems resilient to failures.", topics: ["Redundancy", "Self-healing", "Graceful degradation"] },
    { number: 14, title: "Data Consistency Models", description: "Understand eventual, strong, and causal consistency.", topics: ["Replication lag", "Distributed writes"] },
    { number: 15, title: "Distributed Storage", description: "Learn how data is stored across clusters.", topics: ["Object storage", "File systems", "Replication groups"] },
    { number: 16, title: "Designing Real-Time Systems", description: "Build systems that support live communication and updates.", topics: ["WebSockets", "Polling", "Streaming"] },
    { number: 17, title: "High Availability Systems", description: "Ensure systems stay online even during failures.", topics: ["Redundancy", "Failover", "Health checks"] },
    { number: 18, title: "Final System Design Project", description: "Design a full system using all learned principles.", topics: ["Architecture planning", "Trade-off analysis", "Documentation"] }
  ]
},


  //  MACHINE LEARNING 

  "Machine Learning Mastery": {
    id: 5,
  title: "Machine Learning Mastery",
  description: "Explore neural networks, deep learning, and advanced ML techniques.",
  level: "Expert",
  duration: "12 weeks",
  steps: [
    { number: 1, title: "ML Foundations", description: "Understand the mathematical and conceptual foundations of ML.", topics: ["Data types", "Model functions", "Probability basics"] },
    { number: 2, title: "Linear Models", description: "Learn regression, classification, and their optimization.", topics: ["Linear regression", "Logistic regression", "Gradient descent"] },
    { number: 3, title: "Feature Engineering", description: "Transform raw data into powerful predictive features.", topics: ["Encoding", "Scaling", "Normalization"] },
    { number: 4, title: "Supervised Learning", description: "Train models to predict based on labeled data.", topics: ["Decision trees", "SVM", "Ensemble methods"] },
    { number: 5, title: "Unsupervised Learning", description: "Discover hidden patterns in unlabeled data.", topics: ["Clustering", "Dimensionality reduction"] },
    { number: 6, title: "Neural Network Basics", description: "Start building and understanding neural networks.", topics: ["Perceptron", "Activation functions"] },
    { number: 7, title: "Deep Learning Fundamentals", description: "Explore deep architectures and layered models.", topics: ["Feed-forward networks", "Backpropagation"] },
    { number: 8, title: "Convolutional Neural Networks", description: "Learn models for image recognition.", topics: ["Filters", "Pooling", "CNN architecture"] },
    { number: 9, title: "Recurrent Neural Networks", description: "Build sequence models for text and time series.", topics: ["RNN", "LSTM", "GRU"] },
    { number: 10, title: "Transformers & Attention", description: "Understand modern models like GPT and BERT.", topics: ["Self-attention", "Encoder-decoder"] },
    { number: 11, title: "Reinforcement Learning Basics", description: "Train agents through trial-and-error.", topics: ["Rewards", "Policies"] },
    { number: 12, title: "Advanced Reinforcement Learning", description: "Explore deep RL methods used in robotics and games.", topics: ["DQN", "Policy gradient"] },
    { number: 13, title: "Model Optimization Techniques", description: "Improve training efficiency.", topics: ["Regularization", "Early stopping"] },
    { number: 14, title: "Hyperparameter Tuning", description: "Learn techniques to search for best model configs.", topics: ["Grid search", "Bayesian optimization"] },
    { number: 15, title: "ML Deployment Basics", description: "Serve models in production environments.", topics: ["Containers", "REST APIs"] },
    { number: 16, title: "Model Monitoring", description: "Track performance drift over time.", topics: ["Metrics", "Alerts"] },
    { number: 17, title: "Working with Large Datasets", description: "Use techniques to optimize massive datasets.", topics: ["Batching", "Streaming"] },
    { number: 18, title: "Generative Models", description: "Learn GANs & VAEs for generating data.", topics: ["GAN training", "Latent space"] },
    { number: 19, title: "ML Ethics & Safety", description: "Understand fairness and responsible AI.", topics: ["Bias detection", "Model transparency"] },
    { number: 20, title: "Time Series Forecasting", description: "Model temporal patterns effectively.", topics: ["ARIMA", "LSTM forecasting"] },
    { number: 21, title: "Advanced Optimization Methods", description: "Learn optimization techniques used in deep learning.", topics: ["Adam", "RMSProp"] },
    { number: 22, title: "Transfer Learning", description: "Reuse pre-trained models for new tasks.", topics: ["Fine-tuning", "Domain adaptation"] },
    { number: 23, title: "ML Security", description: "Learn attacks and defenses in ML.", topics: ["Adversarial ML"] },
    { number: 24, title: "Distributed ML Systems", description: "Train large models across clusters.", topics: ["Data parallelism", "Model parallelism"] },
    { number: 25, title: "Final ML Capstone", description: "Build a full ML project from scratch.", topics: ["Dataset preparation", "Model deployment"] }
  ]
},


  // COMPILER DESIGN

  "Compiler Design & Theory": {
    id: 6,
  title: "Compiler Design & Theory",
  description: "Build compilers and understand formal language theory.",
  level: "Expert",
  duration: "14 weeks",
  steps: [
    { number: 1, title: "Compiler Basics", description: "Understand what a compiler does and why it matters.", topics: ["Compilation stages", "Interpreter vs compiler"] },
    { number: 2, title: "Lexical Analysis", description: "Learn how source code is broken into tokens.", topics: ["Tokenization", "Regex rules"] },
    { number: 3, title: "Finite Automata", description: "Explore machines that recognize regular languages.", topics: ["DFA", "NFA"] },
    { number: 4, title: "Syntax Analysis", description: "Parse code into structured trees.", topics: ["Parse trees", "LL/LR parsing"] },
    { number: 5, title: "Grammar Design", description: "Build grammars for programming languages.", topics: ["CFG", "Ambiguity"] },
    { number: 6, title: "Semantic Analysis", description: "Analyze meaning behind code structures.", topics: ["Type checking", "Symbol tables"] },
    { number: 7, title: "Intermediate Representation (IR)", description: "Translate code into machine-agnostic form.", topics: ["AST", "Three-address code"] },
    { number: 8, title: "Code Optimization Basics", description: "Improve performance of generated code.", topics: ["Dead-code removal", "Constant folding"] },
    { number: 9, title: "Control Flow Analysis", description: "Understand branching and function flows.", topics: ["CFGs", "Loops"] },
    { number: 10, title: "Data Flow Analysis", description: "Track values throughout program execution.", topics: ["Liveness", "Reaching definitions"] },
    { number: 11, title: "Advanced Optimization Techniques", description: "Deep optimization methods for compilers.", topics: ["Loop unrolling", "Inlining"] },
    { number: 12, title: "Register Allocation", description: "Map variables efficiently to CPU registers.", topics: ["Graph coloring"] },
    { number: 13, title: "Runtime Environment", description: "Learn how programs execute inside memory.", topics: ["Stacks", "Heaps"] },
    { number: 14, title: "Garbage Collection", description: "Understand memory management techniques.", topics: ["Reference counting", "Mark and sweep"] },
    { number: 15, title: "Code Generation", description: "Produce efficient machine code.", topics: ["Instruction selection"] },
    { number: 16, title: "Assembly Integration", description: "Learn how compilers produce assembly code.", topics: ["Assembly basics", "Linking"] },
    { number: 17, title: "Error Handling", description: "Design meaningful and safe error reporting.", topics: ["Compile-time errors", "Recovery strategies"] },
    { number: 18, title: "Formal Language Theory", description: "Understand the math behind languages.", topics: ["Chomsky hierarchy"] },
    { number: 19, title: "Type Systems", description: "Learn static and dynamic type system foundations.", topics: ["Type inference"] },
    { number: 20, title: "Virtual Machines", description: "Understand how JVM and similar systems work.", topics: ["Bytecode", "VM internals"] },
    { number: 21, title: "Security in Compilers", description: "Avoid vulnerabilities during compilation.", topics: ["Undefined behavior"] },
    { number: 22, title: "Final Compiler Project", description: "Build a small working compiler.", topics: ["Tokenizing", "Parsing", "Generating code"] }
  ]
}
};

export default function RoadmapDetail() {
  const { title } = useParams();

  const [completedSteps, setCompletedSteps] = useState([]);
  const [expandedSteps, setExpandedSteps] = useState([]);

  const roadmap = roadmapDetails[title];
  const stepsCount = roadmap.steps.length;

// دي كده عشان السهم اللي جنب العنوان 
  const [openSteps, setOpenSteps] = useState({});
  const toggleStep = (num) => {
    setOpenSteps((prev) => ({ ...prev, [num]: !prev[num] }));
  };
// ده بيحدد الاستيب الاكتيف والكومبليتد وكده
  const [activeStep, setActiveStep] = useState(0);
  const handleCompleteStep = (index) => {
    if (!completedSteps.includes(index)) {
      setCompletedSteps([...completedSteps, index]);
    }
    if (index < roadmap.steps.length - 1) {
      setActiveStep(index + 1);
    }
  };

  return (
    <>
      <div className="tracksnavbar navbar">
        <div className="navbar container ">
          <Link
            to="/roadmaps"
            style={{ textDecoration: "none" }}
            className="backtoroadmaps"
          >
            <ChevronLeft />
            <span>Back to roadmaps</span>
          </Link>
        </div>
      </div>

      <div className="container containerdetails" level={roadmap.level}>
        <h1 className="roadmaptitle mb-4">{roadmap.title}</h1>
        <p className="roadmapdescription mb-4">{roadmap.description}</p>

        <div className="flex info-row roadmapsstats">
          <div className="flex">
            <BookOpen className="me-2 BookOpen" />
            <span>{roadmap.steps.length} steps</span>
          </div>

          <div className="flex">
            <Clock className="me-2 Clock" />
            <span>{roadmap.duration}</span>
          </div>

          <div className="flex roadmaplevel" level={roadmap.level}>
            <span>{roadmap.level}</span>
          </div>

          <div className="flex roadmapsprogress" level={roadmap.level}>
            <span>Progress: {completedSteps.length}/{stepsCount}</span>
          </div>
        </div>
      </div>
      {/* انا زودت ف الداتا بتاعتك ف الريسورسز icon عشان احط شكل الديكيومنت والكورس (مش لاقية ايقونز عسولة ف حطاها كتيكست) */}
      <div className="container" style={{ padding: "20px" }}>
        <div className="steps">
          {roadmap.steps.map((step, index) => {
            const isCompleted = completedSteps.includes(index);
            const isActive = index === activeStep;
            const isLocked = index > activeStep;
            return(
            <div
                className={`onestep ${isActive ? "active-step" : ""} ${
                  isCompleted ? "completed-step" : ""
                }`}
                key={step.number}
                style={{ marginBottom: "20px" }}
              >
              <div className="stepNumber">{step.number}</div>

              <div
                className="stepDescription"
                onClick={() => toggleStep(step.number)}
              >
                {/* ال svg هنا شكل الاسهم يعني لانهم كتيكست مش حلوين ف اخداهم من ال ui نفسه */}
                <div style={{ display: "flex", gap: "10px" }} className="containercomplete">
                  <h3 style={{ color: "#eee" , fontSize:'24px'}}>{step.title}</h3>
                  <span style={{ fontSize: "20px", color: "white" }}>
                    {openSteps[step.number] ? (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 15l-6-6-6 6" />
                      </svg>
                    ) : (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    )}
                  </span>
                  {isActive && (
                      <button
                        className="complete"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCompleteStep(index);
                        }}
                        style={{
                          backgroundColor: "#331b58",
                          border:'1px solid #9d42ef',
                          color: "#9d42ef",
                          border:'none'
                        }}
                      >
                        Mark Complete
                      </button>
                    )}

                    {isCompleted && (
                      <span style={{ color: "#a82a68",backgroundColor: "#491c48" ,border:"1px solid #a82a68",padding: "5px 10px",
                          borderRadius: "10px"}}className="complete">
                        ✓ Completed
                      </span>
                    )}
                    {isLocked && !isActive && !isCompleted && (
                      <span style={{ color: "#777293",backgroundColor:'#3e365c',border:'1px solid #777293'}}className="complete">
                        Complete Previous
                      </span>
                    )}
                </div>

                <p>{step.description}</p>
                

                {/* Topics */}
                {step.topics && (
                  <>
                    <div className="topics">
                      {step.topics.map((t, index) => (
                        <div key={index} className="onetopic">
                          {t}
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* Resources */}
                {step.resources && (
                  <>
                    {openSteps[step.number] && (
                      <ul type="none">
                        <hr />
                        <h4 style={{ fontSize: "16px" }}>Resources:</h4>

                        {step.resources.map((r, index) => (
                          // ال li نفسها اللي هتودينا لل url ف شيلت الانكور تاج بتاعتك
                          <Link
                            to={r.url}
                            target="_blank"
                            className="url"
                            key={index}
                          >
                            <li className="resourse">
                              <div className="type_resource">
                                {r.icon}
                                {r.type}
                              </div>

                              <div className="iconlink">
                                {/* ال svg علامة اللينك دي مش عارفه اسمها */}
                                {r.name}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="19"
                                  height="19"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="white"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="svg lucide lucide-external-link w-4 h-4 text-muted group-hover/resource:text-primary transition-colors"
                                >
                                  <path d="M15 3h6v6"></path>
                                  <path d="M10 14 21 3"></path>
                                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                </svg>
                              </div>
                            </li>
                          </Link>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </div>
            </div>
          );
          })}
        </div>
      </div>
    </>
  );
}
