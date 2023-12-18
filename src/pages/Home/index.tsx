import { useModel } from '@umijs/max';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  return <>主应用</>;
};

export default HomePage;
