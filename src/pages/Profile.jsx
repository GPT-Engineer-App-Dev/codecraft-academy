const userProfile = {
  name: "John Doe",
  email: "john.doe@example.com",
  enrolledCourses: [
    { id: 1, title: "Introduction to JavaScript" },
    { id: 2, title: "Advanced React" },
  ],
};

const Profile = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <p className="mb-2"><strong>Name:</strong> {userProfile.name}</p>
      <p className="mb-2"><strong>Email:</strong> {userProfile.email}</p>
      <h2 className="text-xl font-semibold mt-4 mb-2">Enrolled Courses</h2>
      <ul className="space-y-2">
        {userProfile.enrolledCourses.map((course) => (
          <li key={course.id} className="border p-2 rounded-lg">
            {course.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;