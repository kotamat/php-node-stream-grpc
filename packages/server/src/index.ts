import {Server, ServerCredentials} from 'grpc';
import {ImageAppService} from '../dist/protos/stream_grpc_pb'
import {getImage} from "./service";

const grpcServer = new Server();

grpcServer.addService(ImageAppService, {
    getImage
});

grpcServer.bind('localhost:6080', ServerCredentials.createInsecure());
grpcServer.start();