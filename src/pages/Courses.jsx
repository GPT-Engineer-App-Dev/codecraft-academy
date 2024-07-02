import { Link } from "react-router-dom";

const courses = [
  { id: 1, title: "Introduction to JavaScript", description: "Learn the basics of JavaScript, the most popular programming language in web development." },
  { id: 2, title: "Advanced React", description: "Dive deep into React and learn advanced concepts and patterns for building scalable applications." },
  { id: 3, title: "Python for Data Science", description: "Master Python and its libraries to analyze and visualize data effectively." },
];

const Courses = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Available Courses</h1>
      <ul className="space-y-4">
        {courses.map((course) => (
          <li key={course.id} className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold">{course.title}</h2>
            <p className="mt-2">{course.description}</p>
            <Link to={`/courses/${course.id}`} className="text-blue-500 hover:underline mt-2 inline-block">
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;