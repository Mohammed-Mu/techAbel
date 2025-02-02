export default function Profile() {
    const user = { 
      name: "John Doe", 
      email: "johndoe@example.com", 
      skills: ["React", "Next.js", "JavaScript"],
      bio: "Passionate frontend developer with a focus on accessibility.",
      profilePic: "/user-avatar.png"
    };
  
    return (
      <div className="max-w-3xl mx-auto p-6 pt-20 bg-white shadow-md rounded-lg">
        <div className="flex items-center space-x-4">
          <img src={user.profilePic} alt="User Avatar" className="w-20 h-20 rounded-full shadow-md" />
          <div>
            <h1 className="text-3xl font-bold text-blue-600">{user.name}</h1>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>
        <p className="mt-4 text-gray-700">{user.bio}</p>
        <h3 className="mt-6 text-xl font-semibold">Skills</h3>
        <div className="flex space-x-2 mt-2">
          {user.skills.map((skill, index) => (
            <span key={index} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-lg text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
    );
  }
  