import axios from "axios";
import Image from "next/dist/client/image";
const HeroById = ({ detailHero }) => {
  const hero_id = detailHero[0].hero_id;
  const hero_name = detailHero[0].hero_name;
  const hero_role = detailHero[0].hero_role;
  const hero_specially = detailHero[0].hero_specially;
  const hero_durability = detailHero[0].hero_overview.hero_durability;
  const hero_offence = detailHero[0].hero_overview.hero_offence;
  const hero_ability = detailHero[0].hero_overview.hero_ability;
  const hero_difficulty = detailHero[0].hero_overview.hero_difficulty;

  return (
    <div className={styles.container}>
      {/* <Image src={item.hero_avatar} width={300} height={250} alt="" /> */}
      <table>
        <tr>
          <td>Id hero</td>
          <td>:</td>
          <td>{hero_id}</td>
        </tr>
        <tr>
          <td>Nama hero</td>
          <td>:</td>
          <td>{hero_name}</td>
        </tr>
        <tr>
          <td>Role</td>
          <td>:</td>
          <td>{hero_role}</td>
        </tr>
        <tr>
          <td>Speciality</td>
          <td>:</td>
          <td>{hero_specially}</td>
        </tr>
        <tr>
          <td>Overview</td>
          <td>:</td>
          <td>
            Durability ({hero_durability}), Offence ({hero_offence}), Ability (
            {hero_ability}), Difficulty ({hero_difficulty})
          </td>
        </tr>
      </table>
    </div>
  );
};

export const getStaticProps = async (ctx) => {
  const id = ctx.params.hero_id;
  const detailHero = await axios.get(
    `https://api.dazelpro.com/mobile-legends/hero/${id}`
  );
  const { data } = detailHero;
  return {
    props: {
      id,
      detailHero: data.hero,
    },
  };
};

export const getStaticPaths = async () => {
  const daftarHero = await axios.get(
    "https://api.dazelpro.com/mobile-legends/hero/"
  );
  const { data } = daftarHero;
  const paths = data.hero.map((detailHero) => ({
    params: { hero_id: detailHero.hero_id.toString() },
  }));

  return { paths, fallback: false };
};

export default HeroById;
