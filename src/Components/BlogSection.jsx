import { Card,  CardBody, Image,Stack,Text,Heading } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export default function BlogSection() {
  

  const blogs = [{
    img: "https://boodmo.com/media/cache/articles_image/images/articles/2117e4b.webp",
    title: "Top 10 Most Common Car Problems and Issues",
    category: "Interior",
    date: "04 May 2023"
  },
    {
    img: "https://boodmo.com/media/cache/articles_image/images/articles/13e6208.webp",
    title: " Which 3 things must you have in your car? ",
    category: "Tools & Garage",
    date: "04 May 2023"
    },
    {
    img: "https://boodmo.com/media/cache/articles_image/images/articles/93d6dd1.webp",
    title: "How to Use T-Cut Scratch Remover for Dents",
    category: "Exterior",
    date: "04 May 2023"
  }
  ]

  return <>
    <div style={{background: "linear-gradient(to top ,rgb(252, 198, 3) 30%,  yellow 50%, white 50%) fixed" }}>
      <div height={"100px"} align={"center"} style={{fontSize : "28px" , fontWeight:"600", marginTop:"35px"}}>
        <h1>OUR BLOG</h1>
      </div>
      <div style={{display : "flex", width:"85%", margin:"auto"}} >
{
      blogs?.map((blog) => {
        return <Card maxW='sm' margin={"auto"}>
  <CardBody width={"100%"}>
    <Image
              src={blog.img}
              alt='blog-image'
              borderRadius='lg'
              marginBottom={"10px"}
              width={"100%"}
            
    />
            <Stack mt='6' spacing='3'>
              <Text style={{display: "flex",justifyContent :"space-between"}}> {blog.category} <span>{blog.date}</span> </Text>
              <Heading size='md'>{blog.title}</Heading>
             <Text>Learn More <ChevronRightIcon/></Text>
    </Stack>
  </CardBody>
</Card>
      })
    }
      </div>
    </div>
    
  
  </>
}