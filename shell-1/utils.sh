
ask()
{
  question="$1"
  color="$2"
  echo $color$question$SOL_reset
  printf ${SOL_orange}'> '
  read answer
  answer=`echo $answer | tr '[:upper:]' '[:lower:]'`
}
