import ProblemCard from "./ProblemCard";

const problems = [
    {
        title: "Graph Coloring (hard version)",
        id: "1792F2",
        statement:'You are given an undirected complete graph on n vertices. A complete graph is a graph where each pair of vertices is connected by an edge. You have to paint the edges of the graph into two colors, red and blue (each edge will have one color).',
    },
    {
        id: "1792F1",
        title: "Graph Coloring (easy version)",
        statement: 'You are given an undirected complete graph on n vertices. A complete graph is a graph where each pair of vertices is connected by an edge. You have to paint the edges of the graph into two colors, red and blue (each edge will have one color).',
    },
];

const ProblemList = () => {
    return (
        <ul>
            {
            problems.map((problem) => {
                return <li>
                    <ProblemCard title={problem.title} id={problem.id} statement={problem.statement} />fc
                </li>
            })
        }
        </ul>
        
    );
};

export default ProblemList;
