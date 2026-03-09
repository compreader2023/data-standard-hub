export interface CategoryNode {
  code: string;
  level: number;
  name: string;
  description: string;
  children?: CategoryNode[];
  // Level 6 (product) specific fields
  version?: string;
  applicationExample?: string;
  expertGroup?: string;
  attributes?: ProductAttribute[];
}

export interface ProductAttribute {
  seq: number;
  code: string;
  name: string;
  type: string;
  unitCodeName: string;
  values: string;
}

const CODE_PREFIX = "1.2.156.5818";

export function getFullCode(code: string): string {
  return `${CODE_PREFIX}.${code}`;
}

// Sample attributes for demo products
const sampleAttributes: ProductAttribute[] = [
  {
    seq: 1,
    code: "CF002490",
    name: "配件/备件类型",
    type: "单选(A)",
    unitCodeName: "-",
    values: "1 CV010511 间隔支架\n2 CV011107 文档\n3 CV011108 电源单元\n4 CV011109 快换夹头\n5 CV002070 插头\n6 CV007828 袋装\n7 CV005419 连接电缆\n8 CV000016 其他",
  },
  { seq: 2, code: "CF006357", name: "配件", type: "布尔值(L)", unitCodeName: "-", values: "-" },
  { seq: 3, code: "CF002492", name: "备件", type: "布尔值(L)", unitCodeName: "-", values: "-" },
];

// Build a representative subset of the category tree
export const categoryTree: CategoryNode[] = [
  {
    code: "0",
    level: 1,
    name: "农林（牧）渔业产品；中药",
    description: "",
    children: [
      {
        code: "0.1",
        level: 2,
        name: "种植业产品",
        description: "包括农产品、园艺和供应市场的菜果园产品等，即包括农业种植业产品和林业种植业产品，如花卉、水果和林木种子、苗等",
        children: [
          {
            code: "0.1.1",
            level: 3,
            name: "谷物、杂粮等及其种子",
            description: "薯类、杂豆类（干的去荚的豆），入代码0121、0122；薯类根茎、块茎见代码01213",
            children: [
              {
                code: "0.1.1.1",
                level: 4,
                name: "小麦及混合麦",
                description: "用GB1351—1999的产品名称和分类",
                children: [
                  {
                    code: "0.1.1.1.1",
                    level: 5,
                    name: "小麦",
                    description: "",
                    children: [
                      { code: "0.1.1.1.1.010", level: 6, name: "冬小麦", description: "", version: "V1.0", applicationExample: "https://demoidc.yangben.cn/", expertGroup: "谷物标准专家组", attributes: sampleAttributes },
                      { code: "0.1.1.1.1.011", level: 6, name: "白色硬质冬小麦", description: "种皮为白色或黄色的麦粒不低于90%，角质率不低于70%的冬小麦", version: "V1.1", applicationExample: "https://demoidc.yangben.cn/", expertGroup: "谷物标准专家组", attributes: sampleAttributes },
                      { code: "0.1.1.1.1.012", level: 6, name: "白色软质冬小麦", description: "种皮为白色或黄色的麦粒不低于90%，粉质率不低于70%的冬小麦", version: "V1.0", applicationExample: "https://demoidc.yangben.cn/", expertGroup: "谷物标准专家组", attributes: sampleAttributes },
                      { code: "0.1.1.1.1.013", level: 6, name: "红色硬质冬小麦", description: "种皮为深红色或红褐色的麦粒不低于90%，角质率不低于70%的冬小麦", version: "V2.0", applicationExample: "https://demoidc.yangben.cn/", expertGroup: "谷物标准专家组", attributes: sampleAttributes },
                      { code: "0.1.1.1.1.014", level: 6, name: "红色软质冬小麦", description: "种皮为深红色或红褐色的麦粒不低于90%，粉质率不低于70%的冬小麦", version: "V1.0", applicationExample: "https://demoidc.yangben.cn/", expertGroup: "谷物标准专家组", attributes: sampleAttributes },
                      { code: "0.1.1.1.1.100", level: 6, name: "春小麦", description: "", version: "V1.0", applicationExample: "https://demoidc.yangben.cn/", expertGroup: "谷物标准专家组", attributes: sampleAttributes },
                      { code: "0.1.1.1.1.101", level: 6, name: "白色硬质春小麦", description: "种皮为白色或黄色的麦粒不低于90%，角质率不低于70%的春小麦", version: "V1.0", applicationExample: "https://demoidc.yangben.cn/", expertGroup: "谷物标准专家组", attributes: sampleAttributes },
                    ],
                  },
                  {
                    code: "0.1.1.1.2",
                    level: 5,
                    name: "混合麦",
                    description: "",
                    children: [],
                  },
                ],
              },
              {
                code: "0.1.1.2",
                level: 4,
                name: "玉米（指谷类）",
                description: "用GB1353—1999的产品名称和分类；菜玉米、笋玉米除外",
                children: [
                  {
                    code: "0.1.1.2.1",
                    level: 5,
                    name: "黄玉米",
                    description: "种皮为黄色，并包括略带红色的黄色玉米；专用玉米除外",
                    children: [
                      { code: "0.1.1.2.1.011", level: 6, name: "黄马齿型玉米", description: "", version: "V1.0", applicationExample: "", expertGroup: "谷物标准专家组", attributes: sampleAttributes },
                      { code: "0.1.1.2.1.012", level: 6, name: "黄硬粒型玉米", description: "", version: "V1.0", applicationExample: "", expertGroup: "谷物标准专家组", attributes: sampleAttributes },
                    ],
                  },
                  { code: "0.1.1.2.2", level: 5, name: "白玉米", description: "种皮为白色，并包括略带淡黄色或粉红色的白色玉米", children: [] },
                  { code: "0.1.1.2.3", level: 5, name: "混合玉米", description: "指混入本类以外玉米超过5.0%的玉米", children: [] },
                  { code: "0.1.1.2.4", level: 5, name: "专用玉米", description: "甜玉米、笋玉米除外", children: [] },
                ],
              },
              { code: "0.1.1.3", level: 4, name: "稻谷、谷子和高粱", description: "", children: [] },
              { code: "0.1.1.4", level: 4, name: "糙米", description: "半碾和全碾大米入代码2316", children: [] },
              { code: "0.1.1.5", level: 4, name: "大麦类", description: "", children: [] },
              { code: "0.1.1.6", level: 4, name: "黑麦、燕麦等", description: "", children: [] },
              { code: "0.1.1.7", level: 4, name: "谷物、杂粮等种子", description: "种用薯芋类根茎、块茎见代码01213", children: [] },
            ],
          },
          { code: "0.1.2", level: 3, name: "蔬菜", description: "", children: [] },
          { code: "0.1.3", level: 3, name: "水果及坚果", description: "", children: [] },
          { code: "0.1.4", level: 3, name: "油籽类和含油果实", description: "", children: [] },
          { code: "0.1.5", level: 3, name: "林业产品", description: "", children: [] },
        ],
      },
      { code: "0.2", level: 2, name: "活动物及动物产品（不包括肉类）", description: "", children: [] },
      { code: "0.3", level: 2, name: "畜牧业产品", description: "", children: [] },
      { code: "0.4", level: 2, name: "渔业产品", description: "", children: [] },
      { code: "0.5", level: 2, name: "仓储服务", description: "", children: [] },
      { code: "0.6", level: 2, name: "中药", description: "", children: [] },
    ],
  },
  {
    code: "1",
    level: 1,
    name: "矿和矿物；电力、可燃气和水",
    description: "",
    children: [
      { code: "1.1", level: 2, name: "无烟煤、烟煤和褐煤等煤；泥炭", description: "包括煤加工产品等", children: [] },
      { code: "1.2", level: 2, name: "原油", description: "", children: [] },
      { code: "1.3", level: 2, name: "天然气", description: "", children: [] },
      { code: "1.4", level: 2, name: "铀和钍矿砂及其精矿", description: "", children: [] },
      { code: "1.5", level: 2, name: "铁矿砂及其精矿", description: "", children: [] },
      { code: "1.6", level: 2, name: "其他非铁金属矿砂及其精矿等", description: "", children: [] },
      { code: "1.7", level: 2, name: "电力、可燃气和水", description: "", children: [] },
      { code: "1.8", level: 2, name: "水", description: "海水除外", children: [] },
    ],
  },
  {
    code: "2",
    level: 1,
    name: "加工食品、饮料和烟草；纺织品、服装和皮革制品",
    description: "包括未化学改性的精练或未精练的蓖麻油、桐油等非食用植物油及其组分；加工饲料和饲料添加剂",
    children: [
      { code: "2.1", level: 2, name: "肉、水产品、水果、蔬菜、油脂等类加工品", description: "", children: [] },
      { code: "2.2", level: 2, name: "乳制品和蛋类制品", description: "", children: [] },
      { code: "2.3", level: 2, name: "谷物磨制品、淀粉、饲料等", description: "", children: [] },
      { code: "2.4", level: 2, name: "饮料", description: "", children: [] },
      { code: "2.5", level: 2, name: "烟草制品", description: "", children: [] },
      { code: "2.6", level: 2, name: "纱线和线", description: "", children: [] },
      { code: "2.7", level: 2, name: "纺织品（布和织物类）", description: "", children: [] },
      { code: "2.8", level: 2, name: "服装", description: "", children: [] },
      { code: "2.9", level: 2, name: "鞋", description: "", children: [] },
    ],
  },
  {
    code: "3",
    level: 1,
    name: "除金属制品、机械和设备外的其他可运输物品",
    description: "不包括0大部类、1大部类、2大部类的产品",
    children: [
      { code: "3.1", level: 2, name: "木（材）和木制品、软木制品", description: "", children: [] },
      { code: "3.2", level: 2, name: "纸浆、纸和纸制品；印刷品和文章", description: "", children: [] },
      { code: "3.3", level: 2, name: "石油产品和相关材料", description: "", children: [] },
      { code: "3.4", level: 2, name: "基础化学品", description: "", children: [] },
      { code: "3.5", level: 2, name: "医药产品和药品", description: "", children: [] },
      { code: "3.6", level: 2, name: "橡胶和塑料制品", description: "", children: [] },
      { code: "3.7", level: 2, name: "玻璃和玻璃制品、陶瓷等", description: "", children: [] },
      { code: "3.8", level: 2, name: "其他制造品", description: "", children: [] },
      { code: "3.9", level: 2, name: "旧物、废弃物或残渣", description: "", children: [] },
    ],
  },
  {
    code: "4",
    level: 1,
    name: "金属制品、机械和设备",
    description: "",
    children: [
      { code: "4.1", level: 2, name: "主要金属材料", description: "", children: [] },
      { code: "4.2", level: 2, name: "金属制品", description: "", children: [] },
      { code: "4.3", level: 2, name: "通用机械", description: "", children: [] },
      { code: "4.4", level: 2, name: "专用机械", description: "", children: [] },
      { code: "4.5", level: 2, name: "办公、会计和计算机器", description: "", children: [] },
      { code: "4.6", level: 2, name: "电气机械和装置", description: "", children: [] },
      { code: "4.7", level: 2, name: "无线电、电视和通讯设备和装置", description: "", children: [] },
      { code: "4.8", level: 2, name: "医疗设备、精密和光学仪器、钟表", description: "", children: [] },
      { code: "4.9", level: 2, name: "运输设备", description: "", children: [] },
    ],
  },
];

export function findNodeByCode(tree: CategoryNode[], code: string): CategoryNode | null {
  for (const node of tree) {
    if (node.code === code) return node;
    if (node.children) {
      const found = findNodeByCode(node.children, code);
      if (found) return found;
    }
  }
  return null;
}

export function getPathToNode(tree: CategoryNode[], targetCode: string, path: CategoryNode[] = []): CategoryNode[] | null {
  for (const node of tree) {
    const currentPath = [...path, node];
    if (node.code === targetCode) return currentPath;
    if (node.children) {
      const result = getPathToNode(node.children, targetCode, currentPath);
      if (result) return result;
    }
  }
  return null;
}
