<!-- BEGIN:nextjs-agent-rules -->
# Frontend Coding Standards (Next.js/React)

-   always use `${process.env.NEXT_PUBLIC_BASE_PATH || ""}` for all image paths.
-   Always use components and props.
-   Always create new files for new components, don't edit existing ones unless necessary.
-   Maintain a proper heirachy of components.
-   Avoid repetitive code, create functions/components for repetitive code.
-   use sperate files for long strings/variables that will be used across multiple components.
-   use sperate files for each functionality, ex: if you need to fetch data from an api, create a file for that api call.
-   use sperate .css files for styling.
<!-- END:nextjs-agent-rules -->
