// import { Wrapper, Status } from "@googlemaps/react-wrapper";
// import { ReactElement, useRef, useEffect } from "react";

// const render = (status: Status): ReactElement => {
//     if (status === Status.FAILURE) return <div>erro</div>;
//     return <div>carregando</div>;
// };

// function MyMapComponent({
//     center,
//     zoom,
// }: {
//     center: google.maps.LatLngLiteral;
//     zoom: number;
// }) {
//     const ref = useRef();

//     useEffect(() => {
//         new window.google.maps.Map(ref.current, {
//             center,
//             zoom,
//         });
//     });

//     return <div ref={ref} id="map" />;
// }

// const MyApp = () => (
//     <Wrapper apiKey={"YOUR_API_KEY"} render={render}>
//         <MyMapComponent />
//     </Wrapper>
// );
