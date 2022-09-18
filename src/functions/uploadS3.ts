import AWS from 'aws-sdk';
const s3 = new AWS.S3();

export async function uploadS3(bucket, bufferImg, ImgFileName) {
    
await s3.upload({
    Bucket : bucket ,
    Key : ImgFileName , 
    ACL : 'public-read', 
    Body : bufferImg 
  }).promise().then(() => {
    return { 
      link : `https://${bucket}.s3.amazonaws.com/${ImgFileName}` 
    }; 
  })
  .catch(() => {
    console.log("Error to do S3 upload")
  });
}
