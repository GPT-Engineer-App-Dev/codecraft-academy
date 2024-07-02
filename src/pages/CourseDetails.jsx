import { useParams } from "react-router-dom";

const courseDetails = {
  1: {
    title: "Introduction to JavaScript",
    content: "This course covers the basics of JavaScript, including variables, functions, and DOM manipulation.",
    instructor: "John Doe",
    enrollment: "Open",
  },
  2: {
    title: "Advanced React",
    content: "This course dives deep into React, covering hooks, context, and advanced patterns.",
    instructor: "Jane Smith",
    enrollment: "Open",
  },
  3: {
    title: "Python for Data Science",
    content: "This course teaches Python for data analysis, covering libraries like pandas and matplotlib.",
    instructor: "Alice Johnson",
    enrollment: "Open",
  },
};

const CourseDetails = () => {
  const { id } = useParams();
  const course = courseDetails[id];

  if (!course) {
    return <p>Course not found</p>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{course.title}</h1>
      <p className="mb-4">{course.content}</p>
      <p className="mb-2"><strong>Instructor:</strong> {course.instructor}</p>
      <p className="mb-2"><strong>Enrollment:</strong> {course.enrollment}</p>
    </div>
  );
};

export default CourseDetails;