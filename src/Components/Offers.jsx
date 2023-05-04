import { Card,  CardBody, Image,Stack,Text,Heading } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export default function Offers() {
  

  const offers = [{
    img: "https://img.freepik.com/free-photo/muscular-car-service-worker-repairing-vehicle_146671-19605.jpg?w=1060&t=st=1683223432~exp=1683224032~hmac=98d5babeab7da0985148ec2a8ff10d5d6d4b6b243c19478cf33f492deec454f5",
    title: "LIMITED OFFER ON REPAIR PARTS",
    
  },
    {
    img: "https://img.freepik.com/free-photo/muscular-car-service-worker-repairing-vehicle_146671-19603.jpg?w=1060&t=st=1683223448~exp=1683224048~hmac=3686364dcef96b48d6829904d80a9ede19cbd722a173bd42b25fe8cdcc4a1c91",
    title: "BODY PART BEST OFFERS",
    }
    
  ]

  return <>
    <div>
      <div height={"100px"} align={"center"} style={{fontSize : "28px" , fontWeight:"600", marginTop:"35px",paddingBottom:"15px"}}>
        <h1>OUR OFFERS</h1>
      </div>
      <div style={{display : "flex", width:"85%", margin:"auto"}} >
{
      offers?.map((blog) => {
        return <Card maxW='120%' margin={"auto"}>
  <CardBody width={"100%"}>
    <Image
              src={blog.img}
              alt='blog-image'
              borderRadius='lg'
              marginBottom={"10px"}
              width={"100%"}
            
    />
            <Stack mt='6' spacing='3'>
              <div  style={{display:"flex" , justifyContent:"space-evenly"}}>
                    <Heading size='md'>{blog.title}</Heading>
             <Text>Learn More <ChevronRightIcon/></Text>
              </div>
    </Stack>
  </CardBody>
</Card>
      })
    }
      </div>
    </div>
    
  
  </>
}