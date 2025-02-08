export interface Group {
  name: string;
  connections: Connection[];
}

export interface Connection {
  connectionsId: string;
  username: string;
}
