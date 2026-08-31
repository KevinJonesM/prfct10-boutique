// Share one self-contained PNG. Unsupported/failed share falls back to download;
// cancellation is intentional and must never trigger an unwanted download.
export async function shareBowracleFile(file,platform,download){
 try{
  if(platform.share&&platform.canShare?.({files:[file]})){
   await platform.share({files:[file],title:'THE BOW-RACLE'});return 'shared';
  }
 }catch(error){if(error.name==='AbortError')return '';}
 download();return 'downloaded';
}
