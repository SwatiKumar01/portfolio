
export const projects = [
  {
    slug: "rle-compression",
    title: "Run-Length Encoding Compression",
    category: "Systems Programming",
    technologies: ["C", "File I/O", "Algorithms"],
    summary:
      "A program that compresses data by representing repeated values as runs.",
    problem:
      "Repeated data can contain redundant sequences that can be represented more compactly.",
    role:
      "Implemented and tested a run-length encoding program as part of systems programming coursework.",
    approach:
      "Read input data, identify consecutive repeated values, and encode runs while handling file operations.",
    outcome:
      "Practiced low-level file I/O, data representation, testing, and evaluating how input patterns affect compression."
  },
  {
    slug: "closest-pair",
    title: "Closest Pair of Points",
    category: "Algorithms",
    technologies: ["C++", "Divide and Conquer", "Big-O Analysis"],
    summary:
      "An algorithmic solution for finding the closest pair among a set of points.",
    problem:
      "Comparing every possible pair becomes inefficient as the number of points increases.",
    role:
      "Worked on an efficient closest-pair algorithm for an algorithms course assignment.",
    approach:
      "Used a divide-and-conquer strategy to split the points into smaller problems and combine their results.",
    outcome:
      "Strengthened understanding of recursion, algorithm design, and O(n log n) time complexity."
  },
  {
    slug: "web-forensics",
    title: "Browser Forensics Website",
    category: "Web Development",
    technologies: ["HTML", "CSS", "Browser Developer Tools"],
    summary:
      "A multi-page website built while investigating browser behavior and web evidence.",
    problem:
      "Web pages can contain broken links, usability issues, and clues that require systematic inspection.",
    role:
      "Created and inspected web pages and documented findings during a browser forensics lab.",
    approach:
      "Built multiple HTML pages, tested navigation, inspected browser behavior, and recorded evidence.",
    outcome:
      "Practiced debugging, web structure, accessibility improvements, and documenting technical findings."
  }
];
