import { S3 } from 'aws-sdk';
const s3 = new S3();

export async function uploadS3(bucket, bufferImg, ImgFileName) {
    
await s3.upload({
    Bucket : bucket ,
    Key : ImgFileName , 
    ACL : 'public-read', 
    Body : bufferImg 
  }).promise()
  .then(() => {
    return { 
      link : `https://${bucket}.s3.amazonaws.com/${ImgFileName}` 
    }; 
  })
  .catch(() => {
    throw Error("Failed to upload on S3");
  });
}