import * as UAParser from 'ua-parser-js';
import { Socket } from 'socket.io';

export const uaAndIp = (register: any, client: Socket) => {
  let uaParser: any = new UAParser(client.handshake.headers['user-agent']);
  uaParser = uaParser.getResult();
  register.ipReq = client.handshake.address;
  console.log(uaParser);
  register.wks =
    !uaParser.device.vendor && !uaParser.device.model && !uaParser.device.type
      ? `${uaParser.os.name} ${uaParser.os.version}`
      : `${uaParser.device.vendor}_${uaParser.device.model}_${uaParser.device.type}`;
};
