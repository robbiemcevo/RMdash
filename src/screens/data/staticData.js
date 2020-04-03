export default (staticData = [
  {
    name: "Boston Beer Inc ",
    shortName: "BBI",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" +Number(Math.round(Math.random() * 10+'e2')+'e-2')  + "%↑",
    fillColor: "rgba(163, 224, 97, 0.2)",
    strokeColor: "rgba(163, 224, 97, 1.0)",
    
    data: [20,38,12,11,13]
  },
  
  {
    name: "Axis Shield PLC",
    shortName: "ASP",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    data: [23,6,15,13,18]
  },
  
  {
    name: "DMG Mori Seiki Aktien",
    shortName: "DMS",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    data: [20,38,12,11,13]
  },
  
  {
    name: "Principal European Equity Inc U",
    shortName: "PEE",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↑",
    fillColor: "rgba(163, 224, 97, 0.2)",
    strokeColor: "rgba(163, 224, 97, 1.0)",
    data: [40,33,32,27,30]
  },
  
  {
    name: "Principal Global Equity Inc I",
    shortName: "PGE",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    data: [15,42,57,70,72]
  },
  
  {
    name: "Monaco Coach Corp",
    shortName: "MCC",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "5↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    data: [17,8,15,6,7]
  },
  
  {
    name: "Principal Asian Equity",
    shortName: "PAE",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↑",
    fillColor: "rgba(163, 224, 97, 0.2)",
    strokeColor: "rgba(163, 224, 97, 1.0)",
    data: [30,36,83,93,93]
  },
  
  {
    name: "Barclays 9% 93-WFM Subord",
    shortName: "BWS",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    data: [25,51,92,108,112]
  },
  {
    name: "David Jones Ltd Shs AUD NPV",
    shortName: "DJS:AU",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" +Number(Math.round(Math.random() * 10+'e2')+'e-2')  + "%↑",
    fillColor: "rgba(163, 224, 97, 0.2)",
    strokeColor: "rgba(163, 224, 97, 1.0)",
    data: [31,41,24,11,14]
  },
  
  {
    name: "Allied Dunbar North Am Gth A/c R",
    shortName: "ADN",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    data: [14,49,62,67,71]
  },
  
  {
    name: "Allied Dunbar Nth American Gth A/cd",
    shortName: "ADN",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    data: [38,11,75,60,60]
  },
  
  {
    name: "Schroder Global Emer Mtks Acc Uts A",
    shortName: "SGE",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↑",
    fillColor: "rgba(163, 224, 97, 0.2)",
    strokeColor: "rgba(163, 224, 97, 1.0)",
    data: [9,16,74,79,80]
  },
  
  {
    name: "Schroder Retail Global Emer Inc Uts",
    shortName: "SRG",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    data: [42,26,6,11,11]
  },
  
  {
    name: "Barnes & Noble Inc Shs USD NPV",
    shortName: "BNI",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "5↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    data: [35,35,32,42,42]
  },
  
  {
    name: "North Atlantic Sm Cos Culs",
    shortName: "NAS",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↑",
    fillColor: "rgba(163, 224, 97, 0.2)",
    strokeColor: "rgba(163, 224, 97, 1.0)",
    data: [7,25,37,45,48]
  },
  
  {
    name: "Itc Ltd Shs Inr 10 GDR Reg S",
    shortName: "ITS",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    data: [46,14,22,15,15]
  },

  {
    name: "Triad Guaranty Inc",
    shortName: "TGI",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" +Number(Math.round(Math.random() * 10+'e2')+'e-2')  + "%↑",
    fillColor: "rgba(163, 224, 97, 0.2)",
    strokeColor: "rgba(163, 224, 97, 1.0)",
    data: [38,37,60,43,50]
  },
  
  {
    name: "Navarre Corp Shs USD NPV",
    shortName: "NCS",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    data: [39,26,82,83,83]
  },
  
  {
    name: "Nichols PLC Shs GBP",
    shortName: "NPS",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    data: [14,50,70,77,77]
  },
  
  {
    name: "Acorn Inc Fd",
    shortName: "AIF",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↑",
    fillColor: "rgba(163, 224, 97, 0.2)",
    strokeColor: "rgba(163, 224, 97, 1.0)",
    data: [26,42,73,57,59]
  },
  
  {
    name: "Acorn Income Fund Ltd",
    shortName: "AFL",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    data: [15,3,5,8,9]
  },
  
  {
    name: "Monaco Coach Corp",
    shortName: "MCC",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "5↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    data: [17,8,15,6,7]
  },
  
  {
    name: "Finsbury Tech Tst",
    shortName: "FTT",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↑",
    fillColor: "rgba(163, 224, 97, 0.2)",
    strokeColor: "rgba(163, 224, 97, 1.0)",
    data: [13,41,53,72,72]
  },
  
  {
    name: "Neuberger & Berman Eq Fd Partners",
    shortName: "NBE",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    data: [25,51,92,108,112]
  },
  
  {
    name: "Coca Cola Plc",
    shortName: "AFL",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    data: [5,30,33,16,23]
  },
  
  {
    name: "Key Global Hedge Pref",
    shortName: "KGH",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "5↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    data: [11,23,50,36,36]
  },
  
  {
    name: "Neue Reg",
    shortName: "NRE",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↑",
    fillColor: "rgba(163, 224, 97, 0.2)",
    strokeColor: "rgba(163, 224, 97, 1.0)",
    data: [37,0,33,14,17]
  },
  
  {
    name: "RF Monolithics Inc",
    shortName: "RMI",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    data: [43,9,19,40,40]
  },
  //-------------------------------------------------------------------------------------------------------------------
  {
    name: "Sherritt Intl ",
    shortName: "SHI",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" +Number(Math.round(Math.random() * 10+'e2')+'e-2')  + "%↑",
    fillColor: "rgba(163, 224, 97, 0.2)",
    strokeColor: "rgba(163, 224, 97, 1.0)",
    data: [20,26,55,62,63]
  },
  
  {
    name: "Ultra Petroleum",
    shortName: "ULP",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    data: [35,24,45,35,36]
  },
  
  {
    name: "Incyte Corp",
    shortName: "INC",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    data: [3,2,3,1,4]
  },
  
  {
    name: "Glimcher Realty Trust Shs Ben Int",
    shortName: "CRT",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↑",
    fillColor: "rgba(163, 224, 97, 0.2)",
    strokeColor: "rgba(163, 224, 97, 1.0)",
    data: [16,30,66,83,90]
  },
  
  {
    name: "Bque Pr Ed De Rothschild",
    shortName: "BPE",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    data: [46,24,4,4,3]
  },
  
  {
    name: "Enersis Shs Clp",
    shortName: "ESC",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "5↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    data: [21,28,62,42,43]
  },
  
  {
    name: "Hammerson PLC",
    shortName: "HAP",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↑",
    fillColor: "rgba(163, 224, 97, 0.2)",
    strokeColor: "rgba(163, 224, 97, 1.0)",
    data: [21,8,38,58,65]
  },
  
  {
    name: "Snb Reg",
    shortName: "SNR",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    data: [33,21,70,88,87]
  },
  {
    name: "Schroder Asia Pacific",
    shortName: "SAP",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" +Number(Math.round(Math.random() * 10+'e2')+'e-2')  + "%↑",
    fillColor: "rgba(163, 224, 97, 0.2)",
    strokeColor: "rgba(163, 224, 97, 1.0)",
    data: [26,54,21,20,20]
  },
  
  {
    name: "Fidelity Inv Tst Div Intl",
    shortName: "FIT",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    data: [35,19,38,38,38]
  },
  
  {
    name: "Oxigene Inc",
    shortName: "OXI",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    data: [39,46,76,78,79]
  },
  
  {
    name: "Canadian National Railway Co",
    shortName: "CNR",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↑",
    fillColor: "rgba(163, 224, 97, 0.2)",
    strokeColor: "rgba(163, 224, 97, 1.0)",
    data: [29,28,8,29,29]
  },
  
  {
    name: "Water Corp",
    shortName: "WAT",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    data: [35,40,60,53,55]
  },
  
  {
    name: "Dev Fin Corp of Ceylon",
    shortName: "DFC",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "5↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    data: [26,22,55,59,64]
  },
  
  {
    name: "US Treas Nts",
    shortName: "UTN",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↑",
    fillColor: "rgba(163, 224, 97, 0.2)",
    strokeColor: "rgba(163, 224, 97, 1.0)",
    data: [27,33,33,39,39]
  },
  
  {
    name: "Borg Warner Automotive",
    shortName: "BWA",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    data: [18,3,48,33,37]
  },

  {
    name: "LG India Fund Ltd Uts A/c R",
    shortName: "LIF",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" +Number(Math.round(Math.random() * 10+'e2')+'e-2')  + "%↑",
    fillColor: "rgba(163, 224, 97, 0.2)",
    strokeColor: "rgba(163, 224, 97, 1.0)",
    data: [6,10,51,62,61]
  },
  
  {
    name: "Navarre Corp Shs USD NPV",
    shortName: "NCS",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    data: [39,26,82,83,83]
  },
  
  {
    name: "Ultratech Inc",
    shortName: "UTI",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    data: [19,26,22,12,12]
  },
  
  {
    name: "Spectral Diagnostics",
    shortName: "SDA",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↑",
    fillColor: "rgba(163, 224, 97, 0.2)",
    strokeColor: "rgba(163, 224, 97, 1.0)",
    data: [10,47,29,37,38]
  },
  
  {
    name: "Royal Bank of Scot Spon ADR",
    shortName: "RBS",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    data: [12,43,41,61,62]
  },
  
  {
    name: "Asyst Tech Inc",
    shortName: "ATI",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "5↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    data: [10,47,36,30,31]
  },
  
  {
    name: "Banpu Public",
    shortName: "BPU",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↑",
    fillColor: "rgba(163, 224, 97, 0.2)",
    strokeColor: "rgba(163, 224, 97, 1.0)",
    data: [7,21,76,70,70]
  },
  
  {
    name: "Templeton China World Fd",
    shortName: "TCW",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    data: [34,24,7,19,23]
  },
  
  {
    name: "UBS Short Term Bd Fd Us Govt B Cap",
    shortName: "UST",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    data: [25,46,60,78,79]
  },
  
  {
    name: "UBS (CH) Eqy Emerging Mkts",
    shortName: "UEE",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "5↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    data: [4,43,31,51,54]
  },
  
  {
    name: "BlackRock Emg Mkts Acc",
    shortName: "BEM",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↑",
    fillColor: "rgba(163, 224, 97, 0.2)",
    strokeColor: "rgba(163, 224, 97, 1.0)",
    data: [19,20,51,35,40]
  },
  
  {
    name: "CS Eqy (Lux) Sm Cap USA B Cap",
    shortName: "CES",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    data: [23,44,15,23,25]
  },
  //-------------------------------------------------------------------------------------------------------------------
  {
    name: "Lexmark INTL A",
    shortName: "LIA",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" +Number(Math.round(Math.random() * 10+'e2')+'e-2')  + "%↑",
    fillColor: "rgba(163, 224, 97, 0.2)",
    strokeColor: "rgba(163, 224, 97, 1.0)",
    data: [16,37,64,53,55]
  },
  
  {
    name: "SSAB",
    shortName: "SSAB",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    data: [34,10,31,49,52]
  },
  
  {
    name: "First Amer Scientific",
    shortName: "FAS",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    data: [36,31,12,10,13]
  },
  
  {
    name: "Richter Gedeon ",
    shortName: "RIG",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↑",
    fillColor: "rgba(163, 224, 97, 0.2)",
    strokeColor: "rgba(163, 224, 97, 1.0)",
    data: [36,36,16,4,9]
  },
  
  {
    name: "Landrys Rest",
    shortName: "LAR",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    data: [20,21,13,22,21]
  },
  
  {
    name: "Wolverine Tube Inc",
    shortName: "WTI",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "5↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    data: [4,8,16,29,28]
  },
  
  {
    name: "Mor Stan Dean Witter Emg Mkt Debt",
    shortName: "MSD",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↑",
    fillColor: "rgba(163, 224, 97, 0.2)",
    strokeColor: "rgba(163, 224, 97, 1.0)",
    data: [33,2,37,56,55]
  },
  
  {
    name: "Baring Global High Yield Bond A/c R",
    shortName: "BGH",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    data: [30,17,69,65,63]
  },
  {
    name: "Schroder Asia Pacific",
    shortName: "SAP",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" +Number(Math.round(Math.random() * 10+'e2')+'e-2')  + "%↑",
    fillColor: "rgba(163, 224, 97, 0.2)",
    strokeColor: "rgba(163, 224, 97, 1.0)",
    data: [26,54,21,20,20]
  },
  
  {
    name: "Baring Global High Yield Bond",
    shortName: "BYB",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    data: [46,17,26,8,12]
  },
  
  {
    name: "Fortune Oil",
    shortName: "FOO",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    data: [28,39,51,62,63]
  },
  
  {
    name: "Estee Lauder Co",
    shortName: "ELC",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↑",
    fillColor: "rgba(163, 224, 97, 0.2)",
    strokeColor: "rgba(163, 224, 97, 1.0)",
    data: [40,38,17,7,9]
  },
  
  {
    name: "Advanced Energy Ind Inc",
    shortName: "WEI",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    data: [24,41,22,41,44]
  },
  
  {
    name: "Eni Spa ",
    shortName: "ENS",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "5↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    data: [23,41,4,-7,-7]
  },
  
  {
    name: "US Treas Nts",
    shortName: "UTN",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↑",
    fillColor: "rgba(163, 224, 97, 0.2)",
    strokeColor: "rgba(163, 224, 97, 1.0)",
    data: [27,33,33,39,39]
  },
  
  {
    name: "John Keells Hldgs",
    shortName: "JKH",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    data: [30,50,59,67,66]
  },

  {
    name: "Reliance Pacific Bhd",
    shortName: "RPB",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" +Number(Math.round(Math.random() * 10+'e2')+'e-2')  + "%↑",
    fillColor: "rgba(163, 224, 97, 0.2)",
    strokeColor: "rgba(163, 224, 97, 1.0)",
    data: [47,43,8,18,23]
  },
  
  {
    name: "Stone Energy Corp",
    shortName: "REC",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    data: [20,44,15,25,0]
  },
  
  {
    name: "Ultratech Inc",
    shortName: "UTI",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    data: [19,26,22,12,12]
  },
  
  {
    name: "Petsmart Inc",
    shortName: "PEI",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↑",
    fillColor: "rgba(163, 224, 97, 0.2)",
    strokeColor: "rgba(163, 224, 97, 1.0)",
    data: [46,10,16,30,33]
  },
  
  {
    name: "Royal Bank of Scot Spon ADR",
    shortName: "RBS",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    data: [12,43,41,61,62]
  },
  
  {
    name: "Rydex Series Tst Nova Fund",
    shortName: "RST",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "5↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    data: [25,16,45,46,52]
  },
  
  {
    name: "Vanguard Total Bond Mkt Ind F",
    shortName: "VTB",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↑",
    fillColor: "rgba(163, 224, 97, 0.2)",
    strokeColor: "rgba(163, 224, 97, 1.0)",
    data: [27,27,5,17,21]
  },
  
  {
    name: "Saul Centers Inc",
    shortName: "SCI",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    data: [44,42,67,51,53]
  },
  
  {
    name: "UBS Eqty Inv Sml Cap Europe",
    shortName: "UEI",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    data: [11,15,86,86,90]
  },
  
  {
    name: "UBS (CH) Eqy Emg Asia",
    shortName: "UEA",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "5↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    data: [45,11,32,27,27]
  },
  
  {
    name: "Schroder Int'L Shs B Jpn Eqty A/c R",
    shortName: "SIL",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↑",
    fillColor: "rgba(163, 224, 97, 0.2)",
    strokeColor: "rgba(163, 224, 97, 1.0)",
    data: [10,49,19,1,2]
  },
  
  {
    name: "Schroder INTL Shs B Japan Eq A/c D",
    shortName: "SIS",
    value: "$" + Number(Math.round(Math.random() * 5000+'e2')+'e-2'),
    change: "+" + Number(Math.round(Math.random() * 10+'e2')+'e-2') + "%↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    data: [43,27,88,85,85]
  }
  //-------------------------------------------------------------------------------------------------------------------

]);
