export interface Group {
  name: string;
  connections: Connections[];
}

export interface Connections {
  connectionsId: string;
  username: string;
}
