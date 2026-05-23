import Card from './components/card'


const arr = [10,20,30];
const App = () => {

 const jobOpenings = [
  {
    brandlogo: "https://thumbs.dreamstime.com/b/google-logo-vector-format-white-background-illustration-407571048.jpg",
    name: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$42/hr",
    location: "Mumbai, India",
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJOltCvD04aVA1Ppbt3wFRcnlkaCogzvmEBQ&s",
    name: "Microsoft",
    datePosted: "2 weeks ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$48/hr",
    location: "Bengaluru, India",
  },
  {
    brandlogo: "https://static.vecteezy.com/system/resources/thumbnails/019/766/223/small_2x/amazon-logo-amazon-icon-transparent-free-png.png",
    name: "Amazon",
    datePosted: "1 week ago",
    post: "MERN Stack Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$35/hr",
    location: "Hyderabad, India",
  },
  {
    brandlogo: "https://static.vecteezy.com/system/resources/previews/055/210/890/non_2x/meta-logo-square-rounded-meta-logo-meta-logo-free-download-free-png.png",
    name: "Meta",
    datePosted: "3 days ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "Pune, India",
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIVrW3WGYFVE_Lv_xxU6JLMyg2bHKiY2vHUg&s",
    name: "Apple",
    datePosted: "4 weeks ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$58/hr",
    location: "Mumbai, India",
  },
  {
    brandlogo: "https://static.vecteezy.com/system/resources/previews/042/165/794/non_2x/netflix-logo-transparent-background-free-png.png",
    name: "Netflix",
    datePosted: "6 days ago",
    post: "JavaScript Developer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$72/hr",
    location: "Delhi, India",
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqEr-bgIG7pgm-oF7EZYEyVkFsF38XetOBww&s",
    name: "Deloitte",
    datePosted: "2 days ago",
    post: "Web Developer",
    tag1: "Full Time",
    tag2: "Entry Level",
    pay: "$28/hr",
    location: "Chennai, India",
  },
  {
    brandlogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/PwC_Company_Logo.svg/960px-PwC_Company_Logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
    name: "PwC",
    datePosted: "3 weeks ago",
    post: "Frontend Intern",
    tag1: "Internship",
    tag2: "Junior Level",
    pay: "$18/hr",
    location: "Noida, India",
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSrALedOkHkGeMF-KBTsUsSMlHOa0wpWYHKw&s",
    name: "EY",
    datePosted: "5 hours ago",
    post: "React JS Developer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$31/hr",
    location: "Gurugram, India",
  },
  {
    brandlogo: "https://nextgeneration.vc/wp-content/uploads/2018/07/kpmg-logo.png",
    name: "KPMG",
    datePosted: "1 month ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$54/hr",
    location: "Mumbai, India",
  },
];
   console.log(jobOpenings)
  return (
    <div className='parent'>
     {jobOpenings.map(function(elem,index){
      return <div key={index}>
         <Card  company = {elem.name} post = {elem.post} datePosted = {elem.datePosted} tag1 = {elem.tag1} tag2 = {elem.tag2} pay = {elem.pay} location = {elem.location} brandlogo = {elem.brandlogo} />
          </div>
     })}
    </div>
  )
}

export default App
