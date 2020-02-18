import NetInfo from '@react-native-community/netinfo';
async function checkConnection() {
    const connectToServer = await fetch('https://kitsu.io/api/edge/categories');
    console.log(connectToServer, 'connectToServer')
    if (connectToServer) {
        return true;
    }
    return false;
}
export default async function verifyNetworkConnection() {
    const verified = await NetInfo.fetch();
    if (verified) {
        return checkConnection();
    }
}
