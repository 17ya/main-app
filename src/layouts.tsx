import { MicroApp, useRouteProps } from '@umijs/max';

const Layouts: React.FC = () => {
  const routerProps = useRouteProps();
  return (
    <>
      <div>主应用</div>
      {routerProps.microApp && (
        <div>
          <MicroApp name={routerProps.microApp} />
        </div>
      )}
    </>
  );
};

export default Layouts;
