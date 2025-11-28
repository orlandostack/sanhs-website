import THUMB1 from "../assets/about-thumbnail-1.jpg";
import THUMB2 from "../assets/about-thumbnail-2.jpg";
import THUMB3 from "../assets/about-thumbnail-3.jpg";

export const blogData = [
  {
    id: 1,
    title: "Celebrating Academic Excellence",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    thumbnail: THUMB1,
    content: `Our school proudly celebrates the accomplishments of students who have demonstrated
              exceptional performance in academics, arts, and sports. This post highlights the
              stories behind their hard work and dedication.`,
    isFeatured: true,
    date: new Date("2025-11-01"),
  },
  {
    id: 2,
    title: "Campus Green Initiative",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    thumbnail: THUMB2,
    content: `Learn about the various eco-projects our students and staff have implemented to
              create a greener campus. From tree planting to waste reduction campaigns, see
              how our community is making a difference.`,
    isFeatured: true,
    date: new Date("2025-10-25"),
  },
  {
    id: 3,
    title: "Student Life Spotlight",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    thumbnail: THUMB3,
    content: `This post explores the vibrant student life at our school, showcasing clubs,
              extracurricular activities, and events that foster creativity, leadership,
              and teamwork among students.`,
    isFeatured: true,
    date: new Date("2025-10-15"),
  },
  {
    id: 4,
    title: "New Library Resources",
    subtitle:
      "Check out the latest books, journals, and digital resources available for students.",
    thumbnail: THUMB1,
    content: `Our school library has added new collections this semester including textbooks,
              reference materials, and digital subscriptions. Students are encouraged to
              explore and make the most of these resources.`,
    isFeatured: false,
    date: new Date("2025-09-30"),
  },
  {
    id: 5,
    title: "Upcoming Sports Events",
    subtitle:
      "Get ready for the exciting sports competitions happening this month on campus.",
    thumbnail: THUMB2,
    content: `From inter-school basketball matches to track and field competitions, students
              can participate or cheer for their teams. Stay updated with the event schedule
              and registration details.`,
    isFeatured: false,
    date: new Date("2025-09-20"),
  },
];
