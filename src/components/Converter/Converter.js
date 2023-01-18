import { useSelector } from "react-redux";
import { getLanguage } from "../../redux/services/languageSlice";
import SummaryEN from "../../Summary/SummaryEN";
import SummaryUA from "../../Summary/SummaryUA";
import SummaryRU from "../../Summary/SummaryRU";
import SummaryDEU from "../../Summary/SummaryDEU";

const AllSummary = { SummaryEN, SummaryUA, SummaryRU, SummaryDEU };

const Converter = () => {
  const { language } = useSelector(getLanguage);

  const lenDefaultLeng = {};
  Object.keys(AllSummary).map((key) => {
    AllSummary[key].language.map((val) =>
      Object.keys(val).map((rezult) => {
        lenDefaultLeng[key] = val[rezult];
        return rezult;
      })
    );
    return key;
  });

  const Summary = AllSummary[language];
  const avatar = {};
  const keys = {};
  Object.keys(Summary).filter((key1) =>
    Summary[key1].filter((key2) =>
      Object.keys(key2).filter((val) => {
        if (val === "title") keys[key1] = key2[val];
        if (val === "avatar") avatar[val] = key2[val];
        return key2[val];
      })
    )
  );
  return { lenDefaultLeng, avatar, keys, Summary };
};

export default Converter;
