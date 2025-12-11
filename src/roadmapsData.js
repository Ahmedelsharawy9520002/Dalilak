export const roadmapDetails = {
  // 1. DATA STRUCTURES
  "Data Structures Fundamentals": {
    id: 1,
    title: { en: "Data Structures Fundamentals", ar: "أساسيات هياكل البيانات" },
    description: { en: "Learn the basics of arrays, linked lists, stacks, and queues. Master the foundation of computer science.", ar: "تعلم أساسيات المصفوفات، القوائم المترابطة، المكدسات، والطوابير. أتقن أساس علوم الحاسب." },
    level: { en: "Beginner", ar: "مبتدئ" },
    duration: { en: "4 weeks", ar: "4 أسابيع" },
    steps: [
      { number: 1, title: { en: "Introduction to Data Structures", ar: "مقدمة في هياكل البيانات" }, description: { en: "Understand what data structures are and why they matter.", ar: "افهم ما هي هياكل البيانات ولماذا هي مهمة." }, topics: { en: ["What is a data structure?", "Memory management", "Time and space complexity"], ar: ["ما هي هياكل البيانات؟", "إدارة الذاكرة", "تعقيد الوقت والمساحة"] }, resources: [{ name: { en: "Data Structures Guide", ar: "دليل هياكل البيانات" }, url: "https://www.geeksforgeeks.org/data-structures/", type: 'document', icon: '📄' }, { name: { en: "CS50 Introduction", ar: "مقدمة CS50" }, url: "https://cs50.harvard.edu", type: 'course', icon: "📚" }] },
      { number: 2, title: { en: "Arrays and Lists", ar: "المصفوفات والقوائم" }, description: { en: "Master the basics of arrays and dynamic lists.", ar: "أتقن أساسيات المصفوفات والقوائم الديناميكية." }, topics: { en: ["Static arrays", "Dynamic arrays", "List operations", "Time complexity"], ar: ["المصفوفات الثابتة", "المصفوفات الديناميكية", "عمليات القوائم", "تعقيد الوقت"] }, resources: [{ name: { en: "Arrays Documentation", ar: "توثيق المصفوفات" }, url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/", type: "document", icon: '📄' }, { name: { en: "Udemy Arrays Course", ar: "كورس المصفوفات" }, url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/", type: "course", icon: "📚" }] },
      { number: 3, title: { en: "Stacks", ar: "المكدسات (Stacks)" }, description: { en: "Learn how stacks work and their real-world applications.", ar: "تعلم كيف تعمل المكدسات وتطبيقاتها في العالم الحقيقي." }, topics: { en: ["LIFO principle", "Stack operations", "Implementation", "Use cases"], ar: ["مبدأ LIFO", "عمليات المكدس", "التنفيذ", "حالات الاستخدام"] }, resources: [{ name: { en: "Stacks Tutorial", ar: "درس المكدسات" }, url: "https://www.programiz.com/dsa/stack", type: "document", icon: '📄' }, { name: { en: "Stack Implementation Course", ar: "كورس تنفيذ المكدس" }, url: "https://www.freecodecamp.org/news/stack-data-structure/", type:"course", icon: "📚" }] },
      { number: 4, title: { en: "Queues", ar: "الطوابير (Queues)" }, description: { en: "Understand queues and their variations.", ar: "افهم الطوابير واختلافاتها." }, topics: { en: ["FIFO principle", "Queue operations", "Priority queues", "Circular queues"], ar: ["مبدأ FIFO", "عمليات الطابور", "طوابير الأولوية", "الطوابير الدائرية"] }, resources: [{ name: { en: "Queues Guide", ar: "دليل الطوابير" }, url: "https://www.programiz.com/dsa/queue", type: "document", icon: '📄' }, { name: { en: "Advanced Queues Course", ar: "كورس الطوابير المتقدم" }, url: "https://www.freecodecamp.org/news/queue-data-structure/", type: "course", icon: "📚" }] },
      { number: 5, title: { en: "Linked Lists", ar: "القوائم المترابطة" }, description: { en: "Explore linked lists and their advantages.", ar: "استكشف القوائم المترابطة ومميزاتها." }, topics: { en: ["Singly linked lists", "Doubly linked lists", "Operations", "Advantages vs arrays"], ar: ["القوائم المفردة", "القوائم المزدوجة", "العمليات", "المميزات مقابل المصفوفات"] }, resources: [{ name: { en: "Linked Lists Reference", ar: "مرجع القوائم المترابطة" }, url: "https://www.geeksforgeeks.org/data-structures/linked-list/", type: "document", icon: '📄' }] },
      { number: 6, title: { en: "Trees", ar: "الأشجار (Trees)" }, description: { en: "Introduction to tree data structures.", ar: "مقدمة في هياكل بيانات الأشجار." }, topics: { en: ["Binary trees", "Tree terminology", "Tree traversal", "Basic operations"], ar: ["الأشجار الثنائية", "مصطلحات الأشجار", "عبور الأشجار", "العمليات الأساسية"] }, resources: [{ name: { en: "Trees Documentation", ar: "توثيق الأشجار" }, url: "https://www.programiz.com/dsa/binary-tree", type: "document", icon: '📄' }] },
      { number: 7, title: { en: "Hashing and Hash Tables", ar: "Hashing وجداول التجزئة" }, description: { en: "Learn about hash functions and hash tables.", ar: "تعلم عن دوال التجزئة وجداول التجزئة." }, topics: { en: ["Hash functions", "Collision handling", "Hash table operations", "Performance"], ar: ["دوال التجزئة", "معالجة التصادم", "عمليات جدول التجزئة", "الأداء"] }, resources: [{ name: { en: "GeeksforGeeks Hashing Tutorial", ar: "درس Hashing" }, url: "https://www.geeksforgeeks.org/hashing-data-structure/", type: "document", icon: "📄" }] },
      { number: 8, title: { en: "Graphs Basics", ar: "أساسيات الرسومات (Graphs)" }, description: { en: "Get started with graph data structures.", ar: "ابدأ مع هياكل بيانات الرسومات." }, topics: { en: ["Graph representation", "Directed and undirected graphs", "Basic terminology"], ar: ["تمثيل الرسم البياني", "الرسومات الموجهة وغير الموجهة", "المصطلحات الأساسية"] }, resources: [{ name: { en: "Programiz Graphs Tutorial", ar: "درس الرسومات" }, url: "https://www.programiz.com/dsa/graph", type: "document", icon: "📄" }] },
      { number: 9, title: { en: "Practice: Building a Stack", ar: "تدريب: بناء مكدس" }, description: { en: "Implement a stack from scratch.", ar: "قم بتنفيذ مكدس من الصفر." }, topics: { en: ["Implementation", "Edge cases", "Testing"], ar: ["التنفيذ", "الحالات الحادة", "الاختبار"] } },
      { number: 10, title: { en: "Practice: Building a Queue", ar: "تدريب: بناء طابور" }, description: { en: "Implement a queue from scratch.", ar: "قم بتنفيذ طابور من الصفر." }, topics: { en: ["Implementation", "Circular queue", "Testing"], ar: ["التنفيذ", "الطابور الدائري", "الاختبار"] } },
      { number: 11, title: { en: "Practice: Linked List Operations", ar: "تدريب: عمليات القائمة المترابطة" }, description: { en: "Implement common linked list operations.", ar: "قم بتنفيذ عمليات القائمة المترابطة الشائعة." }, topics: { en: ["Insertion", "Deletion", "Reversal", "Testing"], ar: ["الإدراج", "الحذف", "العكس", "الاختبار"] } },
      { number: 12, title: { en: "Mini Project: Create a To-Do List", ar: "مشروع صغير: قائمة مهام" }, description: { en: "Build a simple to-do application using learned data structures.", ar: "قم ببناء تطبيق مهام بسيط باستخدام هياكل البيانات التي تعلمتها." }, topics: { en: ["Project planning", "Implementation", "Testing", "Optimization"], ar: ["تخطيط المشروع", "التنفيذ", "الاختبار", "التحسين"] } }
    ]
  },

  // 2. WEB DEVELOPMENT
  "Web Development Basics": {
    id: 2,
    title: { en: "Web Development Basics", ar: "أساسيات تطوير الويب" },
    description: { en: "Master HTML, CSS, and JavaScript fundamentals.", ar: "أتقن أساسيات HTML و CSS و JavaScript." },
    level: { en: "Beginner", ar: "مبتدئ" },
    duration: { en: "6 weeks", ar: "6 أسابيع" },
    steps: [
      { number: 1, title: { en: "HTML Fundamentals", ar: "أساسيات HTML" }, description: { en: "Learn the structure of web pages with HTML.", ar: "تعلم هيكلية صفحات الويب باستخدام HTML." }, topics: { en: ["HTML tags", "Document structure", "Forms", "Semantic HTML"], ar: ["وسوم HTML", "الهيكلية", "النماذج", "HTML الدلالية"] }, resources: [{ name: { en: "HTML Guide", ar: "دليل HTML" }, url: "https://developer.mozilla.org/en-US/docs/Learn/HTML", type: "document", icon: '📄' }, { name: { en: "Udemy HTML Course", ar: "كورس HTML" }, url: "https://www.freecodecamp.org/learn/responsive-web-design/", type: "course", icon: "📚" }] },
      { number: 2, title: { en: "CSS Basics", ar: "أساسيات CSS" }, description: { en: "Style your web pages with CSS.", ar: "نسق صفحات الويب باستخدام CSS." }, topics: { en: ["Selectors", "Properties", "Box model", "Layout basics"], ar: ["المحددات", "الخصائص", "نموذج الصندوق", "أساسيات التخطيط"] }, resources: [{ name: { en: "MDN CSS Guide", ar: "دليل CSS" }, url: "https://developer.mozilla.org/en-US/docs/Learn/CSS", type: "document", icon: "📄" }, { name: { en: "FreeCodeCamp CSS Course", ar: "كورس CSS" }, url: "https://www.freecodecamp.org/learn/responsive-web-design/#basic-css", type: "course", icon: "📚" }] },
      { number: 3, title: { en: "JavaScript Essentials", ar: "أساسيات JavaScript" }, description: { en: "Add interactivity with JavaScript.", ar: "أضف التفاعلية باستخدام JavaScript." }, topics: { en: ["Variables", "Functions", "DOM manipulation", "Events"], ar: ["المتغيرات", "الدوال", "التعامل مع DOM", "الأحداث"] }, resources: [{ name: { en: "MDN JavaScript Guide", ar: "دليل JavaScript" }, url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript", type: "document", icon: "📄" }, { name: { en: "FreeCodeCamp JavaScript Course", ar: "كورس JS" }, url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/", type: "course", icon: "📚" }] },
      { number: 4, title: { en: "Responsive Design", ar: "التصميم المتجاوب" }, description: { en: "Make websites work on all devices.", ar: "اجعل المواقع تعمل على جميع الأجهزة." }, topics: { en: ["Media queries", "Flexbox", "Grid", "Mobile-first design"], ar: ["Media queries", "Flexbox", "Grid", "Mobile-first"] } },
      { number: 5, title: { en: "Web APIs", ar: "واجهات الويب" }, description: { en: "Work with browser APIs and web standards.", ar: "تعامل مع واجهات المتصفح." }, topics: { en: ["Fetch API", "Local storage", "Geolocation", "Notifications"], ar: ["Fetch API", "Local storage", "Geolocation", "Notifications"] } },
      { number: 6, title: { en: "Project: Personal Portfolio", ar: "مشروع: معرض أعمال" }, description: { en: "Build your first website.", ar: "ابني موقعك الأول." }, topics: { en: ["Planning", "Implementation", "Deployment", "Best practices"], ar: ["التخطيط", "التنفيذ", "النشر", "أفضل الممارسات"] } }
    ]
  },

  // 3. ALGORITHMS
  "Advanced Algorithms": {
    id: 3,
    title: { en: "Advanced Algorithms", ar: "الخوارزميات المتقدمة" },
    description: { en: "Dive deep into sorting, searching, and graph algorithms.", ar: "تعمق في خوارزميات الترتيب والبحث والرسوم البيانية." },
    level: { en: "Intermediate", ar: "متوسط" },
    duration: { en: "8 weeks", ar: "8 أسابيع" },
    steps: [
      { number: 1, title: { en: "Mastering Sorting Algorithms", ar: "إتقان خوارزميات الترتيب" }, description: { en: "Understand how classic sorting algorithms work.", ar: "افهم كيف تعمل خوارزميات الترتيب الكلاسيكية." }, topics: { en: ["Bubble, Selection, Insertion", "Merge / Quick Sort", "Time complexity"], ar: ["الفقاعة، الاختيار، الإدراج", "دمج / ترتيب سريع", "تعقيد الوقت"] }, resources: [{ name: { en: "Sorting Algorithms", ar: "خوارزميات الترتيب" }, url: "https://www.freecodecamp.org/news/understanding-sorting-algorithms/", type: "course", icon: "📚" }] },
      { number: 2, title: { en: "Advanced Searching Techniques", ar: "تقنيات البحث المتقدمة" }, description: { en: "Learn efficient ways to search through datasets.", ar: "تعلم طرق فعالة للبحث في البيانات." }, topics: { en: ["Binary search", "Searching trees", "Search complexity"], ar: ["البحث الثنائي", "أشجار البحث", "تعقيد البحث"] }, resources: [{ name: { en: "GeeksforGeeks DSA", ar: "GeeksforGeeks DSA" }, url: "https://www.geeksforgeeks.org/dsa/", type: "document", icon: "📄" }] },
      { number: 3, title: { en: "Greedy Algorithms", ar: "الخوارزميات الجشعة" }, description: { en: "Discover how greedy algorithms make optimal choices.", ar: "اكتشف كيف تقوم الخوارزميات الجشعة باختيارات مثالية." }, topics: { en: ["Greedy strategy", "Optimality", "Activity selection"], ar: ["استراتيجية الجشع", "المثالية", "اختيار النشاط"] }, resources: [{ name: { en: "Greedy Algorithms", ar: "الخوارزميات الجشعة" }, url: "https://www.geeksforgeeks.org/greedy-algorithms/", type: "document", icon: "📄" }] },
      { number: 4, title: { en: "Dynamic Programming", ar: "البرمجة الديناميكية" }, description: { en: "Break problems into overlapping subproblems.", ar: "قسّم المشاكل إلى مشاكل فرعية متداخلة." }, topics: { en: ["Memoization", "Tabulation", "Classic DP"], ar: ["Memoization", "Tabulation", "مسائل DP"] }, resources: [{ name: { en: "Dynamic Programming", ar: "البرمجة الديناميكية" }, url: "https://learnxinyminutes.com/dynamic-programming/", type: "document", icon: "📄" }] },
      { number: 5, title: { en: "Backtracking Algorithms", ar: "خوارزميات التراجع" }, description: { en: "Systematically search for solutions.", ar: "ابحث بشكل منهجي عن الحلول." }, topics: { en: ["Recursion tree", "Constraint satisfaction", "N-Queens"], ar: ["شجرة العودية", "تحقيق القيود", "N-Queens"] }, resources: [{ name: { en: "Backtracking", ar: "التراجع" }, url: "https://www.geeksforgeeks.org/backtracking-algorithms/", type: "document", icon: "📄" }] },
      { number: 6, title: { en: "Graph Theory Basics", ar: "أساسيات نظرية الرسومات" }, description: { en: "Explore graph data structures.", ar: "استكشف هياكل بيانات الرسومات." }, topics: { en: ["Graph types", "Representations", "Applications"], ar: ["أنواع الرسومات", "التمثيل", "التطبيقات"] }, resources: [{ name: { en: "Graph Algorithms", ar: "خوارزميات الرسومات" }, url: "https://www.freecodecamp.org/news/learn-how-graph-algorithms-work/", type: "course", icon: "📚" }] },
      { number: 7, title: { en: "Graph Traversal Techniques", ar: "تقنيات عبور الرسومات" }, description: { en: "Traverse graphs efficiently.", ar: "اعبر الرسومات بكفاءة." }, topics: { en: ["BFS", "DFS", "Traversal complexity"], ar: ["BFS", "DFS", "تعقيد العبور"] }, resources: [{ name: { en: "Graph Algorithms", ar: "خوارزميات الرسومات" }, url: "https://www.freecodecamp.org/news/learn-how-graph-algorithms-work/", type: "course", icon: "📚" }] },
      { number: 8, title: { en: "Shortest Path Algorithms", ar: "خوارزميات أقصر مسار" }, description: { en: "Algorithms for GPS and routing.", ar: "خوارزميات للـ GPS والتوجيه." }, topics: { en: ["Dijkstra", "Bellman-Ford", "Weighted graphs"], ar: ["Dijkstra", "Bellman-Ford", "الرسومات الموزونة"] }, resources: [{ name: { en: "Graph Algorithms", ar: "خوارزميات الرسومات" }, url: "https://www.programiz.com/dsa/graph", type: "document", icon: "📄" }] },
      { number: 9, title: { en: "Minimum Spanning Trees", ar: "الحد الأدنى للأشجار الممتدة" }, description: { en: "Reduce network cost optimally.", ar: "تقليل تكلفة الشبكة بشكل مثالي." }, topics: { en: ["Kruskal", "Prim", "Union-Find"], ar: ["Kruskal", "Prim", "Union-Find"] }, resources: [{ name: { en: "MST Tutorial", ar: "درس MST" }, url: "https://www.geeksforgeeks.org/prims-minimum-spanning-tree-mst-greedy-algo-5/", type: "document", icon: "📄" }] },
      { number: 10, title: { en: "Divide and Conquer", ar: "فرق تسد" }, description: { en: "Solve complex problems by dividing them.", ar: "حل المشاكل المعقدة بتقسيمها." }, topics: { en: ["Decomposition", "Examples", "Performance"], ar: ["التحليل", "أمثلة", "الأداء"] }, resources: [{ name: { en: "Divide and Conquer", ar: "فرق تسد" }, url: "https://www.geeksforgeeks.org/divide-and-conquer-algorithm-introduction/", type: "document", icon: "📄" }] },
      { number: 11, title: { en: "String Searching", ar: "البحث في النصوص" }, description: { en: "Match patterns inside strings.", ar: "طابق الأنماط داخل النصوص." }, topics: { en: ["KMP", "Rabin-Karp", "Preprocessing"], ar: ["KMP", "Rabin-Karp", "المعالجة المسبقة"] }, resources: [{ name: { en: "String Searching", ar: "البحث في النصوص" }, url: "https://www.geeksforgeeks.org/string-searching-algorithms-in-java/", type: "document", icon: "📄" }] },
      { number: 12, title: { en: "Advanced Recursion", ar: "العودية المتقدمة" }, description: { en: "Deep recursive patterns.", ar: "أنماط عودية عميقة." }, topics: { en: ["Tail recursion", "Optimization"], ar: ["العودية الذيلية", "التحسين"] }, resources: [{ name: { en: "Recursion", ar: "العودية" }, url: "https://www.geeksforgeeks.org/recursion/", type: "document", icon: "📄" }] },
      { number: 13, title: { en: "Heuristic Algorithms", ar: "الخوارزميات الاسترشادية" }, description: { en: "Approximation methods.", ar: "طرق التقريب." }, topics: { en: ["A* search", "Heuristics"], ar: ["بحث A*", "الاسترشاد"] }, resources: [{ name: { en: "A* Algorithm", ar: "خوارزمية A*" }, url: "https://www.geeksforgeeks.org/a-search-algorithm/", type: "document", icon: "📄" }] },
      { number: 14, title: { en: "Bit Manipulation", ar: "التلاعب بالبتات" }, description: { en: "Binary operations for efficiency.", ar: "عمليات ثنائية للكفاءة." }, topics: { en: ["Bitwise tricks", "Masks"], ar: ["خدع البتات", "الأقنعة"] }, resources: [{ name: { en: "Bitwise Algos", ar: "خوارزميات البتات" }, url: "https://www.geeksforgeeks.org/bitwise-algorithms/", type: "document", icon: "📄" }] },
      { number: 15, title: { en: "Complexity Analysis", ar: "تحليل التعقيد" }, description: { en: "Time and space analysis.", ar: "تحليل الوقت والمساحة." }, topics: { en: ["Big-O", "Lower bounds"], ar: ["Big-O", "الحدود الدنيا"] }, resources: [{ name: { en: "Analysis", ar: "التحليل" }, url: "https://www.geeksforgeeks.org/analysis-of-algorithms-set-1-asymptotic-analysis/", type: "document", icon: "📄" }] },
      { number: 16, title: { en: "Advanced Graph Algos", ar: "خوارزميات رسومات متقدمة" }, description: { en: "Techniques for network systems.", ar: "تقنيات لأنظمة الشبكات." }, topics: { en: ["Topological sort", "SCC"], ar: ["الترتيب الطوبولوجي", "SCC"] }, resources: [{ name: { en: "Graph Tutorial", ar: "درس الرسومات" }, url: "https://www.geeksforgeeks.org/graph-algorithms/", type: "document", icon: "📄" }] },
      { number: 17, title: { en: "Network Flow", ar: "تدفق الشبكة" }, description: { en: "Scheduling and allocation.", ar: "الجدولة والتخصيص." }, topics: { en: ["Ford-Fulkerson", "Max flow"], ar: ["Ford-Fulkerson", "التدفق الأقصى"] }, resources: [{ name: { en: "Max Flow", ar: "التدفق الأقصى" }, url: "https://www.geeksforgeeks.org/ford-fulkerson-algorithm-for-maximum-flow-problem/", type: "document", icon: "📄" }] },
      { number: 18, title: { en: "Optimization Problems", ar: "مشاكل التحسين" }, description: { en: "Optimize for performance.", ar: "التحسين للأداء." }, topics: { en: ["Pruning", "Caching"], ar: ["التقليم", "التخزين المؤقت"] }, resources: [{ name: { en: "Optimization Guide", ar: "دليل التحسين" }, url: "https://www.geeksforgeeks.org/algorithmic-optimizations/", type: "document", icon: "📄" }] },
      { number: 19, title: { en: "Advanced Data Structures", ar: "هياكل بيانات متقدمة" }, description: { en: "Structures enhancing performance.", ar: "هياكل تعزز الأداء." }, topics: { en: ["Heaps", "Tries", "Segment trees"], ar: ["الأكوام", "Tries", "Segment trees"] }, resources: [{ name: { en: "Advanced DS", ar: "هياكل متقدمة" }, url: "https://www.geeksforgeeks.org/data-structures/", type: "document", icon: "📄" }] },
      { number: 20, title: { en: "Capstone: Final Project", ar: "المشروع الختامي" }, description: { en: "Solve real-world problems.", ar: "حل مشاكل واقعية." }, topics: { en: ["Problem decomposition", "Final project"], ar: ["تفكيك المشكلة", "المشروع النهائي"] }, resources: [{ name: { en: "Full Course", ar: "الدورة الكاملة" }, url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/", type: "course", icon: "📚" }] }
    ]
  },

  // 4. SYSTEM DESIGN
  "System Design Principles": {
    id: 4,
    title: { en: "System Design Principles", ar: "مبادئ تصميم الأنظمة" },
    description: { en: "Learn scalability, load balancing, and distributed systems.", ar: "تعلم قابلية التوسع، موازنة الأحمال، والأنظمة الموزعة." },
    level: { en: "Intermediate", ar: "متوسط" },
    duration: { en: "10 weeks", ar: "10 أسابيع" },
    steps: [
      { number: 1, title: { en: "Scalability Fundamentals", ar: "أساسيات قابلية التوسع" }, description: { en: "Learn what scalability means.", ar: "تعلم معنى قابلية التوسع." }, topics: { en: ["Horizontal scaling", "Vertical scaling"], ar: ["التوسع الأفقي", "التوسع الرأسي"] } },
      { number: 2, title: { en: "Load Balancing", ar: "موازنة الأحمال" }, description: { en: "Distribute traffic across servers.", ar: "توزيع حركة المرور عبر الخوادم." }, topics: { en: ["Strategies", "Failover"], ar: ["الاستراتيجيات", "تجاوز الفشل"] } },
      { number: 3, title: { en: "Caching Strategies", ar: "استراتيجيات الكاش" }, description: { en: "Boost performance with caching.", ar: "تعزيز الأداء بالكاش." }, topics: { en: ["Redis", "Cache policies"], ar: ["Redis", "سياسات الكاش"] } },
      { number: 4, title: { en: "Database Sharding", ar: "تقسيم قواعد البيانات" }, description: { en: "Split large databases.", ar: "تقسيم قواعد البيانات الكبيرة." }, topics: { en: ["Shard keys", "Partitioning"], ar: ["مفاتيح التقسيم", "التقسيم"] } },
      { number: 5, title: { en: "Database Replication", ar: "نسخ قواعد البيانات" }, description: { en: "Improve availability.", ar: "تحسين التوافر." }, topics: { en: ["Master-slave", "Sync vs async"], ar: ["Master-slave", "تزامن vs غير متزامن"] } },
      { number: 6, title: { en: "Message Queues", ar: "طوابير الرسائل" }, description: { en: "Async communication.", ar: "التواصل غير المتزامن." }, topics: { en: ["Kafka", "RabbitMQ"], ar: ["Kafka", "RabbitMQ"] } },
      { number: 7, title: { en: "Distributed Systems", ar: "الأنظمة الموزعة" }, description: { en: "Systems across multiple machines.", ar: "أنظمة عبر أجهزة متعددة." }, topics: { en: ["CAP theorem", "Consistency"], ar: ["نظرية CAP", "الاتساق"] } },
      { number: 8, title: { en: "Microservices", ar: "الخدمات المصغرة" }, description: { en: "Move to microservices.", ar: "الانتقال للخدمات المصغرة." }, topics: { en: ["API gateway", "Discovery"], ar: ["بوابة API", "الاكتشاف"] } },
      { number: 9, title: { en: "API Design", ar: "تصميم API" }, description: { en: "Design clean APIs.", ar: "تصميم واجهات نظيفة." }, topics: { en: ["REST", "Versioning"], ar: ["REST", "الإصدارات"] } },
      { number: 10, title: { en: "CDN", ar: "CDN" }, description: { en: "Distribute content faster.", ar: "توزيع المحتوى أسرع." }, topics: { en: ["Edge caching", "Latency"], ar: ["كاش الحافة", "التأخير"] } },
      { number: 11, title: { en: "Security", ar: "الأمان" }, description: { en: "Protect from threats.", ar: "الحماية من التهديدات." }, topics: { en: ["OWASP", "AuthN/AuthZ"], ar: ["OWASP", "المصادقة"] } },
      { number: 12, title: { en: "Monitoring", ar: "المراقبة" }, description: { en: "Track performance.", ar: "تتبع الأداء." }, topics: { en: ["Metrics", "Alerts"], ar: ["المقاييس", "التنبيهات"] } },
      { number: 13, title: { en: "Fault Tolerance", ar: "تحمل الأخطاء" }, description: { en: "Resilient systems.", ar: "أنظمة مرنة." }, topics: { en: ["Redundancy", "Self-healing"], ar: ["التكرار", "الشفاء الذاتي"] } },
      { number: 14, title: { en: "Consistency Models", ar: "نماذج الاتساق" }, description: { en: "Eventual vs strong consistency.", ar: "الاتساق النهائي والقوي." }, topics: { en: ["Replication lag"], ar: ["تأخر النسخ"] } },
      { number: 15, title: { en: "Distributed Storage", ar: "التخزين الموزع" }, description: { en: "Store across clusters.", ar: "التخزين عبر المجموعات." }, topics: { en: ["Object storage"], ar: ["تخزين الكائنات"] } },
      { number: 16, title: { en: "Real-Time Systems", ar: "أنظمة الوقت الحقيقي" }, description: { en: "Live communication.", ar: "اتصال مباشر." }, topics: { en: ["WebSockets", "Streaming"], ar: ["WebSockets", "البث"] } },
      { number: 17, title: { en: "High Availability", ar: "توافر عالي" }, description: { en: "Stay online.", ar: "البقاء متصلاً." }, topics: { en: ["Failover", "Health checks"], ar: ["تجاوز الفشل", "الفحوصات"] } },
      { number: 18, title: { en: "Final Project", ar: "المشروع النهائي" }, description: { en: "Design a full system.", ar: "صمم نظاماً كاملاً." }, topics: { en: ["Architecture", "Docs"], ar: ["البنية", "التوثيق"] } }
    ]
  },

  // 5. MACHINE LEARNING
  "Machine Learning Mastery": {
    id: 5,
    title: { en: "Machine Learning Mastery", ar: "احتراف تعلم الآلة" },
    description: { en: "Explore neural networks, deep learning, and advanced ML techniques.", ar: "استكشف الشبكات العصبية، والتعلم العميق، وتقنيات ML المتقدمة." },
    level: { en: "Expert", ar: "خبير" },
    duration: { en: "12 weeks", ar: "12 أسبوع" },
    steps: [
      { number: 1, title: { en: "ML Foundations", ar: "أساسيات تعلم الآلة" }, description: { en: "Math foundations.", ar: "الأسس الرياضية." }, topics: { en: ["Probability"], ar: ["الاحتمالات"] } },
      { number: 2, title: { en: "Linear Models", ar: "النماذج الخطية" }, description: { en: "Regression & Classification.", ar: "الانحدار والتصنيف." }, topics: { en: ["Gradient descent"], ar: ["الانحدار المتدرج"] } },
      { number: 3, title: { en: "Feature Engineering", ar: "هندسة الميزات" }, description: { en: "Transform data.", ar: "تحويل البيانات." }, topics: { en: ["Normalization"], ar: ["التطبيع"] } },
      { number: 4, title: { en: "Supervised Learning", ar: "التعلم الخاضع للإشراف" }, description: { en: "Predict based on labels.", ar: "التنبؤ بناءً على التصنيف." }, topics: { en: ["Decision trees"], ar: ["أشجار القرار"] } },
      { number: 5, title: { en: "Unsupervised Learning", ar: "التعلم غير الخاضع للإشراف" }, description: { en: "Find hidden patterns.", ar: "اكتشاف الأنماط." }, topics: { en: ["Clustering"], ar: ["التجميع"] } },
      { number: 6, title: { en: "Neural Networks", ar: "الشبكات العصبية" }, description: { en: "Basics of NN.", ar: "أساسيات الشبكات." }, topics: { en: ["Perceptron"], ar: ["Perceptron"] } },
      { number: 7, title: { en: "Deep Learning", ar: "التعلم العميق" }, description: { en: "Deep architectures.", ar: "البنى العميقة." }, topics: { en: ["Backpropagation"], ar: ["الانتشار العكسي"] } },
      { number: 8, title: { en: "CNN", ar: "CNN" }, description: { en: "Image recognition.", ar: "التعرف على الصور." }, topics: { en: ["Filters"], ar: ["الفلاتر"] } },
      { number: 9, title: { en: "RNN", ar: "RNN" }, description: { en: "Sequence models.", ar: "نماذج التسلسل." }, topics: { en: ["LSTM"], ar: ["LSTM"] } },
      { number: 10, title: { en: "Transformers", ar: "Transformers" }, description: { en: "GPT & BERT.", ar: "GPT و BERT." }, topics: { en: ["Attention"], ar: ["الانتباه"] } },
      { number: 11, title: { en: "Reinforcement Learning", ar: "التعلم المعزز" }, description: { en: "Trial and error.", ar: "التجربة والخطأ." }, topics: { en: ["Rewards"], ar: ["المكافآت"] } },
      { number: 12, title: { en: "Advanced RL", ar: "RL المتقدم" }, description: { en: "Deep RL.", ar: "RL العميق." }, topics: { en: ["DQN"], ar: ["DQN"] } },
      { number: 13, title: { en: "Optimization", ar: "التحسين" }, description: { en: "Training efficiency.", ar: "كفاءة التدريب." }, topics: { en: ["Regularization"], ar: ["Regularization"] } },
      { number: 14, title: { en: "Tuning", ar: "الضبط" }, description: { en: "Model configs.", ar: "إعدادات النموذج." }, topics: { en: ["Grid search"], ar: ["Grid search"] } },
      { number: 15, title: { en: "Deployment", ar: "النشر" }, description: { en: "Serve models.", ar: "تشغيل النماذج." }, topics: { en: ["REST APIs"], ar: ["REST APIs"] } },
      { number: 16, title: { en: "Monitoring", ar: "المراقبة" }, description: { en: "Track drift.", ar: "تتبع الانحراف." }, topics: { en: ["Metrics"], ar: ["المقاييس"] } },
      { number: 17, title: { en: "Large Datasets", ar: "البيانات الكبيرة" }, description: { en: "Optimize massive data.", ar: "تحسين البيانات الضخمة." }, topics: { en: ["Batching"], ar: ["Batching"] } },
      { number: 18, title: { en: "Generative Models", ar: "النماذج التوليدية" }, description: { en: "GANs.", ar: "GANs." }, topics: { en: ["Latent space"], ar: ["المساحة الكامنة"] } },
      { number: 19, title: { en: "Ethics", ar: "الأخلاقيات" }, description: { en: "Fairness.", ar: "العدالة." }, topics: { en: ["Bias"], ar: ["التحيز"] } },
      { number: 20, title: { en: "Time Series", ar: "السلاسل الزمنية" }, description: { en: "Forecasting.", ar: "التنبؤ." }, topics: { en: ["ARIMA"], ar: ["ARIMA"] } },
      { number: 21, title: { en: "Advanced Opt", ar: "تحسين متقدم" }, description: { en: "Adam.", ar: "Adam." }, topics: { en: ["RMSProp"], ar: ["RMSProp"] } },
      { number: 22, title: { en: "Transfer Learning", ar: "نقل التعلم" }, description: { en: "Reuse models.", ar: "إعادة استخدام النماذج." }, topics: { en: ["Fine-tuning"], ar: ["الضبط الدقيق"] } },
      { number: 23, title: { en: "Security", ar: "الأمان" }, description: { en: "Attacks.", ar: "الهجمات." }, topics: { en: ["Adversarial"], ar: ["الخصومة"] } },
      { number: 24, title: { en: "Distributed ML", ar: "ML الموزع" }, description: { en: "Training clusters.", ar: "مجموعات التدريب." }, topics: { en: ["Parallelism"], ar: ["التوازي"] } },
      { number: 25, title: { en: "Capstone", ar: "المشروع" }, description: { en: "Full project.", ar: "مشروع كامل." }, topics: { en: ["Deployment"], ar: ["النشر"] } }
    ]
  },

  // 6. COMPILER DESIGN
  "Compiler Design & Theory": {
    id: 6,
    title: { en: "Compiler Design & Theory", ar: "تصميم المترجمات والنظرية" },
    description: { en: "Build compilers and understand formal language theory.", ar: "بناء المترجمات وفهم نظرية اللغات الرسمية." },
    level: { en: "Expert", ar: "خبير" },
    duration: { en: "14 weeks", ar: "14 أسبوع" },
    steps: [
      { number: 1, title: { en: "Compiler Basics", ar: "أساسيات المترجم" }, description: { en: "What a compiler does.", ar: "ماذا يفعل المترجم." }, topics: { en: ["Stages"], ar: ["المراحل"] } },
      { number: 2, title: { en: "Lexical Analysis", ar: "التحليل المعجمي" }, description: { en: "Tokenization.", ar: "الترميز." }, topics: { en: ["Tokens"], ar: ["الرموز"] } },
      { number: 3, title: { en: "Finite Automata", ar: "الأوتوماتا المحدودة" }, description: { en: "Regular languages.", ar: "اللغات المنتظمة." }, topics: { en: ["DFA"], ar: ["DFA"] } },
      { number: 4, title: { en: "Syntax Analysis", ar: "التحليل النحوي" }, description: { en: "Parsing.", ar: "الإعراب." }, topics: { en: ["Trees"], ar: ["الأشجار"] } },
      { number: 5, title: { en: "Grammar Design", ar: "تصميم القواعد" }, description: { en: "Build grammars.", ar: "بناء القواعد." }, topics: { en: ["CFG"], ar: ["CFG"] } },
      { number: 6, title: { en: "Semantic Analysis", ar: "التحليل الدلالي" }, description: { en: "Meaning.", ar: "المعنى." }, topics: { en: ["Types"], ar: ["الأنواع"] } },
      { number: 7, title: { en: "Intermediate Rep", ar: "التمثيل الوسيط" }, description: { en: "Machine agnostic.", ar: "محايد للآلة." }, topics: { en: ["AST"], ar: ["AST"] } },
      { number: 8, title: { en: "Optimization Basics", ar: "أساسيات التحسين" }, description: { en: "Performance.", ar: "الأداء." }, topics: { en: ["Dead code"], ar: ["الكود الميت"] } },
      { number: 9, title: { en: "Control Flow", ar: "تدفق التحكم" }, description: { en: "Branching.", ar: "التفرع." }, topics: { en: ["Loops"], ar: ["الحلقات"] } },
      { number: 10, title: { en: "Data Flow", ar: "تدفق البيانات" }, description: { en: "Track values.", ar: "تتبع القيم." }, topics: { en: ["Liveness"], ar: ["الحيوية"] } },
      { number: 11, title: { en: "Advanced Opt", ar: "تحسين متقدم" }, description: { en: "Deep methods.", ar: "طرق عميقة." }, topics: { en: ["Inlining"], ar: ["Inlining"] } },
      { number: 12, title: { en: "Register Allocation", ar: "تخصيص السجلات" }, description: { en: "Map variables.", ar: "رسم المتغيرات." }, topics: { en: ["Coloring"], ar: ["التلوين"] } },
      { number: 13, title: { en: "Runtime Env", ar: "بيئة التشغيل" }, description: { en: "Memory execution.", ar: "تنفيذ الذاكرة." }, topics: { en: ["Stack/Heap"], ar: ["Stack/Heap"] } },
      { number: 14, title: { en: "Garbage Collection", ar: "جمع القمامة" }, description: { en: "Memory management.", ar: "إدارة الذاكرة." }, topics: { en: ["Mark/Sweep"], ar: ["Mark/Sweep"] } },
      { number: 15, title: { en: "Code Generation", ar: "توليد الكود" }, description: { en: "Machine code.", ar: "كود الآلة." }, topics: { en: ["Instructions"], ar: ["التعليمات"] } },
      { number: 16, title: { en: "Assembly", ar: "التجميع" }, description: { en: "Assembly code.", ar: "كود التجميع." }, topics: { en: ["Linking"], ar: ["الربط"] } },
      { number: 17, title: { en: "Error Handling", ar: "معالجة الأخطاء" }, description: { en: "Reporting.", ar: "التقارير." }, topics: { en: ["Recovery"], ar: ["الاسترداد"] } },
      { number: 18, title: { en: "Formal Languages", ar: "اللغات الرسمية" }, description: { en: "Math.", ar: "الرياضيات." }, topics: { en: ["Chomsky"], ar: ["تشومسكي"] } },
      { number: 19, title: { en: "Type Systems", ar: "أنظمة الأنواع" }, description: { en: "Type foundations.", ar: "أسس الأنواع." }, topics: { en: ["Inference"], ar: ["الاستنتاج"] } },
      { number: 20, title: { en: "Virtual Machines", ar: "الآلات الافتراضية" }, description: { en: "JVM.", ar: "JVM." }, topics: { en: ["Bytecode"], ar: ["Bytecode"] } },
      { number: 21, title: { en: "Security", ar: "الأمان" }, description: { en: "Vulnerabilities.", ar: "الثغرات." }, topics: { en: ["Undefined"], ar: ["غير معرف"] } },
      { number: 22, title: { en: "Final Project", ar: "المشروع النهائي" }, description: { en: "Build compiler.", ar: "بناء مترجم." }, topics: { en: ["Generating"], ar: ["التوليد"] } }
    ]
  }
};