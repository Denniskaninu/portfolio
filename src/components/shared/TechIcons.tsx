// A component to render tech stack icons.
// Using inline SVGs to avoid external dependencies and allow for easy styling.

export const ReactIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" className="h-full w-full" fill="currentColor" color="#61DAFB">
      <title>React Logo</title>
      <circle cx="0" cy="0" r="2.05" fill="currentColor"></circle>
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"></ellipse>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse>
      </g>
    </svg>
  );
  
  export const NextjsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className="h-full w-full" fill="currentColor" color="var(--foreground)">
        <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm0 121.5C32.1 121.5 6.5 95.9 6.5 64S32.1 6.5 64 6.5s57.5 25.6 57.5 57.5-25.6 57.5-57.5 57.5z"></path>
        <path d="M92.3 40.2L55.8 84.8c-.8 1-2.2 1.3-3.3.8-.5-.2-.9-.6-1.2-1.1L38.5 65c-1-1.5-.4-3.5 1.1-4.5.5-.3 1-.5 1.6-.5.6 0 1.2.1 1.7.4l11.4 9.1L88 38.6c1.4-1.1 3.4-.8 4.5 1 .4.5.6 1.1.6 1.7-.1.4-.2.9-.8 1.1z"></path>
    </svg>
  );

  export const TailwindCssIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-full w-full" fill="currentColor" color="#38BDF8">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-4.7-6.29c.39-.39 1.02-.39 1.41 0L12 14.59l3.29-3.29c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41L13.41 16l3.29 3.29c.39.39.39 1.02 0 1.41s-1.02.39-1.41 0L12 17.41l-3.29 3.29c-.39.39-1.02.39-1.41 0s-.39-1.02 0-1.41L10.59 16 7.3 12.71c-.38-.39-.38-1.02 0-1.42z"></path>
    </svg>
  );
  
  export const Html5Icon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-full w-full" fill="currentColor" color="#E34F26">
      <path d="M1.9 21.2l1.8-20.5h16.6l-1.8 20.5-6.5 1.8-6.5-1.8zM12 4.2h5.7l-.4 4.5H12V4.2zm-1.1 6.5h6.1l-.3 3.6-2.8.8v-3.3h-3v3.3l-2.8-.8.2-1.9z"></path>
    </svg>
  );

  export const PythonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 11v-1a2 2 0 00-2-2H8a2 2 0 00-2 2v6a2 2 0 002 2h4a2 2 0 002-2v-1" fill="#3776AB"></path>
      <path d="M10 13v1a2 2 0 002 2h4a2 2 0 002-2V8a2 2 0 00-2-2h-4a2 2 0 00-2 2v1" fill="#FFD43B"></path>
    </svg>
  );
  
  export const NodeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-full w-full" fill="currentColor" color="#339933">
        <path d="M21.57,10.92,13.1,3.53a2.4,2.4,0,0,0-3.39.3,2.4,2.4,0,0,0,.18,3.46l5.7,4.3a.62.62,0,0,1,.16.89L9.43,18.9a2.4,2.4,0,0,0,3.39-.3,2.4,2.4,0,0,0-.18-3.46l-5.7-4.3a.ggak.62,0,0,1-.16-.89L13.1,3.53a2.4,2.4,0,0,0-3.39.3,2.4,2.4,0,0,0,.18,3.46l5.7,4.3a.62.62,0,0,1,.16.89L9.43,18.9a2.4,2.4,0,0,0,3.39-.3,2.4,2.4,0,0,0-.18-3.46l-5.7-4.3a.62.62,0,0,1-.16-.89l6.32-6.42a.8.8,0,0,1,1.13,0l8.47,7.39a.8.8,0,0,1,0,1.26l-8.47,7.39a.8.8,0,0,1-1.13,0L2.43,13.08a.8.8,0,0,1,0-1.26l8.47-7.39a.8.8,0,0,1,1.13,0l8.47,7.39a.8.8,0,0,1,0,1.26L12,20.47a.8.8,0,0,1-1.13,0L2.43,13.08a.8.8,0,0,1,0-1.26l8.47-7.39" />
    </svg>
  );
  
  export const PostgreSqlIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-full w-full" fill="currentColor" color="#4169E1">
        <path d="M12,2A10,10,0,0,0,2,12a10,10,0,0,0,10,10,10,10,0,0,0,10-10A10,10,0,0,0,12,2Zm5,13H15v2H13V15H7V13h6V7h2v6h2Z"></path>
    </svg>
  );
  
  export const MySqlIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-full w-full" fill="currentColor" color="#4479A1">
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-1 14.5v-5l-2.5 3-1.5-1.5v-4h2v5l2.5-3L15 9.5v4h-4z" />
    </svg>
  );
  
  export const MongoDbIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-full w-full" fill="currentColor" color="#47A248">
      <path d="M12 2a10 10 0 0 0-3.3 19.4c.4.1.6-.2.6-.4v-1.4c-3.3.7-3.6-1.6-3.6-1.6-.4-1-1-1.2-1-1.2-.7-.5.1-.5.1-.5.8.1 1.2 1 1.2 1 .7 1.3 1.9 1 2.3.7.1-.6.3-1 .5-1.2-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.2-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.5 1.2.2 1.9.1 2.1.5.6.8 1.3.8 2.2 0 3.1-1.9 3.8-3.7 4 .3.3.6.8.6 1.5v2.2c0 .2.2.5.6.4A10 10 0 0 0 12 2Z"></path>
    </svg>
  );
  
  export const FirebaseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-full w-full" fill="currentColor" color="#FFCA28">
      <path d="M3.7 18.5l7-14.7c.3-.6 1.1-.6 1.4 0l3.2 6.8 3.7-2.1c.5-.3 1.1.2 1 .8l-2.7 14.7c-.2.9-1.3.9-1.5 0l-3.2-6.8-3.7 2.1c-.5.3-1.1-.2-1-.8z"></path>
    </svg>
  );
  
  export const DockerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-full w-full" fill="currentColor" color="#2496ED">
      <path d="M21.1,8.3c-0.3-1.9-1.4-3.5-3-4.6c-1.6-1.1-3.6-1.5-5.6-1.1L12,2.4C6.5,3.6,2.9,8.6,2.9,14.3c0,0.4,0,0.8,0.1,1.2h0 c0.1,1,0.4,1.9,0.8,2.8c0.8,1.5,2,2.8,3.6,3.6c1.5,0.8,3.2,1.2,5,1.2c2.1,0,4.1-0.6,5.8-1.7c1.7-1.1,3-2.7,3.6-4.6 c0.3-0.8,0.4-1.7,0.4-2.6c0-1-0.2-2-0.5-2.9C21.4,10.2,21.4,9.2,21.1,8.3z M12.6,4.9c0.7,0,1.3,0.6,1.3,1.3c0,0.7-0.6,1.3-1.3,1.3 c-0.7,0-1.3-0.6-1.3-1.3C11.3,5.5,11.9,4.9,12.6,4.9z M9.4,7.4C10.1,7.4,10.7,8,10.7,8.7c0,0.7-0.6,1.3-1.3,1.3S8.1,9.4,8.1,8.7 C8.1,8,8.7,7.4,9.4,7.4z M15.8,7.4c0.7,0,1.3,0.6,1.3,1.3c0,0.7-0.6,1.3-1.3,1.3s-1.3-0.6-1.3-1.3C14.5,8,15.1,7.4,15.8,7.4z M6.2,10.6c0.7,0,1.3,0.6,1.3,1.3c0,0.7-0.6,1.3-1.3,1.3s-1.3-0.6-1.3-1.3C4.9,11.2,5.5,10.6,6.2,10.6z M12.6,10.6 c0.7,0,1.3,0.6,1.3,1.3s-0.6,1.3-1.3,1.3s-1.3-0.6-1.3-1.3S11.9,10.6,12.6,10.6z M9.4,13.8c0.7,0,1.3,0.6,1.3,1.3 c0,0.7-0.6,1.3-1.3,1.3s-1.3-0.6-1.3-1.3C8.1,14.4,8.7,13.8,9.4,13.8z"></path>
    </svg>
  );
  
  export const KubernetesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-full w-full" fill="currentColor" color="#326CE5">
      <path d="M12 2l-7.5 4.34v8.66L12 19.34l7.5-4.34v-8.66L12 2zm-1.5 13.5l-4.5-2.6v-2.8l4.5 2.6v2.8zm1.5 1.5l-4.5-2.6-1.5-.86v-2.8l6 3.46v2.86zm6-6.9l-4.5 2.6v2.8l4.5-2.6v-2.8zm-6-2.6l4.5-2.6 1.5.86v2.8l-6-3.46V7z"></path>
    </svg>
  );
  
  export const AwsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-full w-full" fill="currentColor" color="#FF9900">
      <path d="M12.4,15.5c-1.3,1.2-3.2,1.3-4.6,0.2c-1.4-1.1-1.8-3-1-4.6c0.8-1.6,2.7-2.3,4.3-1.5c1.7,0.8,2.3,2.7,1.5,4.3 C12.6,14.4,12.5,15,12.4,15.5z M21.4,13.2c-0.2-1.3-0.8-2.5-1.7-3.4c-0.9-0.9-2.1-1.5-3.4-1.7c-0.5-0.1-1,0.2-1.1,0.7 c-0.1,0.5,0.2,1,0.7,1.1c1.9,0.3,3.5,1.9,3.8,3.8c0.1,0.5,0.6,0.8,1.1,0.7C21.3,14.3,21.5,13.7,21.4,13.2z M17.2,4.8 c-1.3-0.2-2.5-0.8-3.4-1.7c-0.9-0.9-1.5-2.1-1.7-3.4c-0.1-0.5-0.6-0.8-1.1-0.7C10.5-0.9,10.2-0.4,10.3,0c0.3,1.9,1.9,3.5,3.8,3.8 c0.5,0.1,1-0.2,1.1-0.7C15.3,2.6,15.7,2.1,16.1,1.7C16.9,2.5,17,3.6,17.2,4.8z"></path>
    </svg>
  );
  
  export const GitIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-full w-full" fill="currentColor" color="#F05032">
      <path d="M22.2,10.5l-3.3-3.3c-0.4-0.4-1-0.4-1.4,0L13,11.7l-2.8-2.8l1.3-1.3c0.4-0.4,0.4-1,0-1.4l-3-3c-0.4-0.4-1-0.4-1.4,0 L4,6.3c-0.4,0.4-0.4,1,0,1.4l3.3,3.3l-3.3,3.3c-0.4,0.4-0.4,1,0,1.4l3,3c0.4,0.4,1,0.4,1.4,0l3.1-3.1l2.8,2.8l-1.3,1.3 c-0.4,0.4-0.4,1,0,1.4l3,3c0.4,0.4,1,0.4,1.4,0l3.1-3.1c0.4-0.4,0.4-1,0-1.4L18.4,12l3.8-3.8C22.6,11.5,22.6,10.9,22.2,10.5z"></path>
    </svg>
  );

  export const TypescriptIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-full w-full" fill="currentColor" color="#3178C6">
      <path d="M1.5 1.5h21v21h-21z" fill="#fff"></path>
      <path d="M1.5 1.5h21v21h-21v-21" fill="none" stroke="#3178C6" strokeWidth="3"></path>
      <path d="M11.2 16.3V7.9h2.3v1.6h.1c.4-.8 1.4-1.8 2.8-1.8.2 0 .4 0 .6.1V10c-.3 0-.5-.1-.8-.1-.9 0-1.7.5-2.1 1.3v5.1h-2.9zm-4.1-1.6c0-2.3 1.8-4.2 4.1-4.2s4.1 1.9 4.1 4.2-1.8 4.2-4.1 4.2-4.1-1.9-4.1-4.2zm2.9 0c0 1 .6 1.8 1.3 1.8s1.3-.8 1.3-1.8-.6-1.8-1.3-1.8-1.3.8-1.3 1.8z"></path>
    </svg>
  );

  export const JavascriptIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-full w-full">
      <path d="M1.5 1.5h21v21h-21z" fill="#F7DF1E"></path>
      <path d="M12.5 16.3c.7 1.1 1.9 1.8 3.2 1.8 1.3 0 2.1-.6 2.1-1.5 0-1-.7-1.4-1.9-2l-1.1-.5c-1.8-.8-3-1.8-3-4.2 0-2.2 1.6-3.8 4.1-3.8 1.9 0 3.3.9 4.1 2.4l-2.4 1.4c-.5-.8-1.2-1.2-2-1.2-1 0-1.5.5-1.5 1.2 0 .9.5 1.2 1.7 1.7l1.1.5c2.2.9 3.4 2 3.4 4.5 0 2.6-2 4.3-4.8 4.3-2.6 0-4.3-1.4-5.2-3l2.5-1.4zm-6.2 1.5c.7 1.1 1.9 1.8 3.2 1.8 1.3 0 2.1-.6 2.1-1.5 0-1-.7-1.4-1.9-2l-1.1-.5c-1.8-.8-3-1.8-3-4.2 0-2.2 1.6-3.8 4.1-3.8 1.9 0 3.3.9 4.1 2.4l-2.4 1.4c-.5-.8-1.2-1.2-2-1.2-1 0-1.5.5-1.5 1.2 0 .9.5 1.2 1.7 1.7l1.1.5c2.2.9 3.4 2 3.4 4.5 0 2.6-2 4.3-4.8 4.3-2.6 0-4.3-1.4-5.2-3l2.5-1.4z"></path>
    </svg>
  );

  export const GoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-full w-full" fill="currentColor" color="#00ADD8">
      <path d="M12 12m-10 0a10 10 0 1 0 20 0a10 10 0 1 0 -20 0"></path>
    </svg>
  );

  export const RedisIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-full w-full" fill="currentColor" color="#DC382D">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9v-2h2v2zm0-4H9V6h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V6h2v2z"></path>
    </svg>
  );
  
  export const GraphqlIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-full w-full" fill="currentColor" color="#E10098">
        <path d="M12 2l-9.5 5.5v11L12 22l9.5-5.5v-11L12 2zm0 18.5l-8-4.6V9.1l8 4.6v6.8zm-4-10.3l4-2.3 4 2.3-4 2.3-4-2.3zM20 15.9l-8 4.6V13l8-4.6v7.5z"></path>
    </svg>
  );
  
  export const SupabaseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-full w-full" fill="currentColor" color="#3ECF8E">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 13.5L6 13V9l4.5 2.5v4zM12 11.5L7.5 9l4.5-2.5 4.5 2.5L12 11.5zm1.5 4L18 13V9l-4.5 2.5v4z" />
    </svg>
  );

  export const ExpressIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-full w-full" fill="currentColor" color="var(--foreground)">
      <path d="M 3.84375 3.84375 L 3.84375 6.40625 L 14.4375 6.40625 L 14.4375 8.96875 L 3.84375 8.96875 L 3.84375 11.53125 L 14.4375 11.53125 L 14.4375 14.09375 L 3.84375 14.09375 L 3.84375 16.65625 L 15.25 16.65625 L 20.15625 11.75 L 20.15625 8.78125 L 15.25 3.84375 L 3.84375 3.84375 z M 5.53125 5.53125 L 14.4375 5.53125 L 14.4375 5.53125 L 17.5 8.59375 L 17.5 11.9375 L 14.4375 15 L 14.4375 14.96875 L 5.53125 14.96875 L 5.53125 12.40625 L 13.5625 12.40625 L 13.5625 10.65625 L 5.53125 10.65625 L 5.53125 8.09375 L 13.5625 8.09375 L 13.5625 6.40625 L 5.53125 6.40625 L 5.53125 5.53125 z" />
    </svg>
  );

  export const DjangoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-full w-full" fill="currentColor" color="#092E20">
      <path d="M0 16.14V7.86L8.57 3v8.28L0 16.14zM9.52 21l8.58-4.86V7.86L9.52 12v9zM18.1 6.86L9.52 2.2V11l8.58-4.14z" />
    </svg>
  );

  export const FastApiIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-full w-full" fill="currentColor" color="#009688">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 14.5L6 13V9l4.5 2.5v4zM12 11.5L7.5 9l4.5-2.5 4.5 2.5L12 11.5zm1.5 4L18 13V9l-4.5 2.5v4z" />
    </svg>
  );

    