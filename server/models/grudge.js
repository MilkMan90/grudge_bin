function Grudge(name, offense, forgiven, date){
  this.id = Date.now();
  this.name = name;
  this.offense = offense;
  this.forgiven = forgiven || false;
  this.date = date;
}

module.exports = Grudge
