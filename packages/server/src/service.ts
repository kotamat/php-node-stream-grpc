import {BaseParam, Image} from "../dist/protos/stream_pb";
import {ServerUnaryCall} from 'grpc';
import {generateImage} from './repository';


export async function getImage(call: ServerUnaryCall<BaseParam>, callback: any): Promise<void> {

    const request = call.request;

    const image = new Image();

    const obj = request.toObject();
    image.setImage(await generateImage(obj));

    callback(null, image)

}
