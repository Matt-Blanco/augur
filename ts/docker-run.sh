#!/usr/bin/env bash

usage() {
    echo "Usage: ./docker-run.sh [-h|--help] --inputFile <file to instrument> [--outputFile <path to desired analysis output>] [--sources <comma-separated sources list>] [--sinks <comma-separated sinks list]"
}

CUR=""
INPUT_FILE=""
OUTPUT_FILE=""
SOURCES=""
SINKS=""
DOCKER_OPTIONS=""
MX_OPTIONS=""

# Used to run the analysis on a JavaScript file.
# Parse arguments.
while [[ $# -gt 0 ]]
do
key="$1"

case $key in
    -h|--help)
    usage
    exit 0
    ;;
    --inputFile)
    INPUT_FILE="$2"
    shift
    shift
    ;;
    --outputFile)
    OUTPUT_FILE="$2"
    shift
    shift
    ;;
    --sources)
    SOURCES="$2"
    shift
    shift
    ;;
    --sinks)
    SINKS="$2"
    shift
    shift
    ;;
    # Unknown argument
    *)
    usage
    exit 1
    ;;
esac
done

CUR=$(pwd)
export CUR
export SOURCES
export SINKS


# If the user did not specify the program to instrument, print the usage and
# terminate.
if [[ -z "$INPUT_FILE" ]]
then
    usage
    exit 1
fi

# Docker doesn't allow relative paths when mounting volumes, so we must ensure
# INPUT_FILE and OUTPUT_FILE are absolute. We can do this by canonicalizing
# both paths.
canonicalize() {
    readlink -f $@
}
INPUT_FILE=`canonicalize "$INPUT_FILE"`
OUTPUT_FILE=`canonicalize "$OUTPUT_FILE"`

# if [[ ! "$INPUT_FILE" = /* ]]
# then
#     INPUT_FILE=`readlink -f $INPUT_FILE` # ${CUR}/${INPUT_FILE}
# fi
# if [[ ! "$OUTPUT_FILE" = /* ]] && [[ -z "$OUTPUT_FILE" ]]
# then
#     OUTPUT_FILE=${CUR}/${OUTPUT_FILE}
# fi

# If an output file was specified, we need to pass this along to the `mx`
# command.
if [[ -z "$OUTPUT_FILE" ]]
then
    MX_OPTIONS=""
    DOCKER_OPTIONS=""
else
    MX_OPTIONS="--initParam outputFile:/root/output.js"
    touch "$OUTPUT_FILE"
    DOCKER_OPTIONS="-v $OUTPUT_FILE:/root/output.js"
fi

docker run --rm \
       -v $CUR:/root/ts \
       -v $INPUT_FILE:/root/program.js \
       ${DOCKER_OPTIONS} \
       -e SOURCES="$SINKS" \
       -e SINKS="$SOURCES" \
       jsanalysis:latest \
       bash -c \
       "(cd /root/ts; \
       /root/mx/mx -p /root/nodeprof/ jalangi \
       $MX_OPTIONS \
         --analysis /root/ts/dist/src/analysis/index.js /root/program.js)"