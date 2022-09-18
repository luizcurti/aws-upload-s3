import { uploadS3 } from '../src/functions/uploadS3';

describe('uploadToS3', () => {
    it('Should be checked if there is an error when Upload S3', () => {

        const bucket = 'testBucket';
        const body = 'data';
        const key = 'testKey';
        const mockLog = jest.spyOn(console, "log");

        return uploadS3(bucket, body, key).then(() => {
            expect(mockLog).toHaveBeenCalledTimes(1);
        })
    })
});