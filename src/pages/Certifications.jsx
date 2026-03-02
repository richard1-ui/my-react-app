import { useEffect, useState } from "react"

function Certifications() {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
      .then(res => res.json())
      .then(data => setCourses(data))
  }, [])

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Certifications</h1>

      {courses.map(course => (
        <div key={course.id} className="border p-4 mb-4 rounded">
          <h2 className="font-bold">{course.title}</h2>
          <p>{course.body}</p>
        </div>
      ))}
    </div>
  )
}

export default Certifications