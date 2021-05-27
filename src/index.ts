export function freeGC()
{
  if (typeof global !== 'undefined' && typeof global.gc === 'function')
  {
    global.gc();
  }
}

export default freeGC
