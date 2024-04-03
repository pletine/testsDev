export function Test1() {
    return <div style={{ backgroundColor: 'red', height: '120px', width: '120px' }} onMouseMove={e => console.log('Mouse position:', e.clientX, e.clientY)}><h1>Test1</h1></div>;
}

export function Test2() {
    return <div style={{ backgroundColor: 'blue', height: '120px', width: '120px' }} onDeviceMotion={e => { alert('Move'); console.log('Device movement:', e.orientation, e); }}><h1>Test2</h1></div>;
}