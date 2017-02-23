function Grudge(id, name, offense, forgiven, date){
  this.id = id;
  this.name = name;
  this.offense = offense;
  this.forgiven = forgiven || false;
  this.date = date;
}

module.exports = Grudge
