import PExpr from './PExpr';

export default class Lex extends PExpr {
  constructor(public expr: PExpr) {
    super();
  }
}
