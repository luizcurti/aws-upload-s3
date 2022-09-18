import { invalidEvent, validEvent } from "./mockData/index.mock"
import { handler } from '../src/functions/index';
import axios from "axios";

jest.mock('axios');

describe('getImage', () => {
    beforeAll(() => {
        jest.resetAllMocks();
    });

    test('Should be check if Lambda has URL', async () => {
        process.env.BUCKET = 'bucketS3';
        const result = await handler(invalidEvent);
        expect(result).toEqual('Invalid parameters. URL is missing');
    });

    test('Should be check if Lambda has Bucket', async () => {
        process.env.BUCKET = '';
        const result = await handler(validEvent);
        expect(result).toEqual('Invalid parameters. Bucket is missing');
    });

    test('Should be checked if there is an error when fetching image', async () => {
        process.env.BUCKET = 'bucketS3';
        jest.spyOn(axios, "get");

        try {
            await handler(validEvent);
            expect(1).toEqual(0);
        } catch (error){
            expect(error).toEqual(new Error("Error fetching image"));
        }
    });
});
